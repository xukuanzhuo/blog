import { Entity, Modifier, EditorState } from 'draft-js'
const linkify = require('linkifyjs')

// Link 组件，读取 entity 中的 url，渲染链接
const Link = ({entityKey, children}) => {
  const {url} = Entity.get(entityKey).getData()

  console.log(url)
  console.log(children)

  return (
    <a
      target="_blank"
      href={url}
    >
      {children}
    </a>
  )
}

// 创建插件的函数，因为插件可能可以接受不同的参数进行初始化。返回的对象就是一个 Draft.js 插件
const linkTitlePlugin = () => {
  return {
    decorators: [
      {
        // 找到对应 type 为 link 的 entity 的文字位置
        strategy: (contentBlock, callback) => {
          contentBlock.findEntityRanges(character => {
            const entityKey = character.getEntity()
            return (
              entityKey !== null &&
              Entity.get(entityKey).getType() === 'link'
            )
          }, callback)
        },
        component: Link,
      },
    ],
    handlePastedText: (text, html, getEditorState, setEditorState) => {
      // 如果粘贴进来的不是链接，return false 告诉 Draft.js 进行粘贴操作的默认处理
      const isPlainLink = !html && linkify.test(text)
      if (!isPlainLink) return false

      console.log(getEditorState)

      fetch(`/scraper?url=${text}`) // 抓取网页标题的后端服务
      .then((res) => res.json())
      .then((data) => {
        const title = data.title
        const editorState = getEditorState()
        const contentState = editorState.getCurrentContent()
        const selection = editorState.getSelection()
        let newContentState
        if (title && title !== text) {
          const entityKey = Entity.create('link', 'IMMUTABLE', {url: text}) // 创建新 entity
          newContentState = Modifier.replaceText(contentState, selection, title, null,
            entityKey) // 在当前选区位置插入带 entity 的文字，文字内容为抓取到的 title
        } else {
          newContentState = Modifier.replaceText(contentState, selection, text)
        }
        const newEditorState = EditorState.push(editorState, newContentState, 'insert-link')
        if (newEditorState) {
          setEditorState(newEditorState)
        }
      }, () => {
        // 请求失败，插入不带 entity 的纯文本，文字内容为粘贴来的原内容
        const editorState = getEditorState()
        const contentState = editorState.getCurrentContent()
        const selection = editorState.getSelection()
        const newContentState = Modifier.replaceText(contentState, selection, text)
        const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters')
        if (newEditorState) {
          setEditorState(newEditorState)
        }
      })

      // return true 告诉 Draft.js 我已经处理完毕这次粘贴事件，Draft.js 不必再进行处理
      return true
    },
  }
}

export default linkTitlePlugin
