import React from 'react';
import "./cours1.scss";

const Cours1 = () => {

    return (
        <div className="main">
            <div className="course1">
                <h1>1.React Basics</h1>
                <h2>1.1 インストール</h2>
                <p>次のコマンドでアプリケーションを作成します。</p>
                <p id="codebackground">
                $ npx create-react-app my-first-react-app
                </p>
                <h2>1.2 私たちの最初のコンポーネント</h2>
                <p>まず、index.jsxファイルをsrcフォルダに作成します。サイト全体の入り口となる場所です。</p>
            </div>
        </div>
    );
};

export default Cours1;