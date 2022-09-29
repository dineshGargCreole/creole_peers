import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
    .ant-layout {
        min-height: 100vh;
    }

    .logo {
        float: left;
        background: white;
        width: 200px;
        margin-left: -49px;
        padding: 5px;
        height: 64px;
    }
  
    .ant-row-rtl .logo {
        float: right;
        margin: 16px 0 16px 24px;
    }
    
    .site-layout-background {
        background: #fff;
    }

    .ant-layout-header{
        background: #1b8fab;
    }

    .ant-menu {
        background: #565756;
    }

`

export default Global;