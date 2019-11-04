import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, Icon, Breadcrumb, Affix } from "antd";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/style/pages/detailed.css";
import "markdown-navbar/dist/navbar.css";
import axios from "axios";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from "../components/tocify.tsx";
import servicePath from "../config/apiUrl";

const Detailed = props => {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>`;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.article_content);

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/">视频列表</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>xxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">React实战视频教程(更新10集)</div>
              <div className="list-icon center">
                <span>
                  <Icon type="calendar" />
                  2019-06-28
                </span>
                <span>
                  <Icon type="folder" />
                  视频教程
                </span>
                <span>
                  <Icon type="fire" />
                  200
                </span>
              </div>
              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav">文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

Detailed.getInitialProps = async content => {
  let id = content.query.id;
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleById + id).then(res => {
      resolve(res.data.data[0]);
    });
  });
  return await promise;
};

export default Detailed;
