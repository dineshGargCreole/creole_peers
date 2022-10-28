import { createGlobalStyle } from "styled-components";

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
    
    .ant-layout-header{
        background: #1b8fab;
    }

    .ant-card-head {
        background: #565756;
        color: #fff;
    }

    .ant-card-head-title {
        font-weight: 800;
    }

    .ant-menu-submenu-arrow {
        color: #fff;
    }

    .ant-table-thead > tr > th {
        background: #565756;
        font-weight: 700;
        color: #fff;
        text-align: center;
    }

    .ant-table-tbody{
        text-align: center;
    }
`;

export default Global;
