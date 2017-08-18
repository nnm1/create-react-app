import appConfig from '../../config/appConfig'

const htmlUtil = {
  setTitle(title) {
    if (title) {
      document.title = `${title} | ${appConfig.title}`
    }
  },

  setMetaDescription(description) {
    if (description) {
      document.head.querySelector('meta[name=description]').content = description
    }
  },

  setTitleAndMetaDescription(title, description) {
    this.setTitle(title)
    this.setMetaDescription(description)
  }
}

export default htmlUtil
