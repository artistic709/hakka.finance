export default {
  content_wrapper: {
    width: '100%'
  },
  content: {
    // marginLeft: '5%',
  },
  custom_scroll_bar: {
    height: '100vh',
    overflow: 'auto',
    '@media screen and (max-width: 576px)': {
      position: 'relative'
    },
    '::-webkit-scrollbar': {
      display: 'none'
    }
  }
}
