以下是更新后的 `README.md` 文件，包含多种动态引入 JavaScript 的方法。

```markdown
# LinkAware

## 語言選擇
- [繁體中文](#繁體中文)
- [English](#english)
- [日本語](#日本語)

---

## 繁體中文

### 專案介紹
LinkAware 是一個可以在使用者點擊外部連結時，顯示確認對話框的 JavaScript 工具。此工具可防止意外跳轉到不屬於該網站的連結，並提供法律聲明。

### 使用方法

#### 靜態引入
將以下代碼加入你的 HTML 文件中：
```html
<script src="https://oinktech.github.io/LinkAware/@1.0.0/script.js"></script>
```

#### 動態引入
你可以使用多種方式動態引入此腳本：

1. **基本方式**：
    ```javascript
    const script = document.createElement('script');
    script.src = 'https://oinktech.github.io/LinkAware/@1.0.0/script.js';
    document.head.appendChild(script);
    ```

2. **使用 Promise**（確保腳本加載完畢）：
    ```javascript
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Script load error'));
            document.head.appendChild(script);
        });

    loadScript('https://oinktech.github.io/LinkAware/@1.0.0/script.js')
        .then(() => {
            console.log('Script loaded successfully');
        })
        .catch(error => {
            console.error(error);
        });
    ```

3. **使用 async 和 defer**：
    ```javascript
    const script = document.createElement('script');
    script.src = 'https://oinktech.github.io/LinkAware/@1.0.0/script.js';
    script.async = true; // 立即下載
    script.defer = true; // 等待文檔解析完成再執行
    document.head.appendChild(script);
    ```

### 版本信息
- **第一版**: [1.0.0](https://oinktech.github.io/LinkAware/@1.0.0/script.js)
- **第二版**: 即將推出

---

## English

### Project Introduction
LinkAware is a JavaScript tool that displays a confirmation dialog when users click on external links. This tool helps prevent accidental navigation to links that do not belong to the current site and provides a legal disclaimer.

### Usage

#### Static Import
Add the following code to your HTML file:
```html
<script src="https://oinktech.github.io/LinkAware/@1.0.0/script.js"></script>
```

#### Dynamic Import
You can dynamically import this script using multiple methods:

1. **Basic Method**:
    ```javascript
    const script = document.createElement('script');
    script.src = 'https://oinktech.github.io/LinkAware/@1.0.0/script.js';
    document.head.appendChild(script);
    ```

2. **Using Promises** (to ensure the script is loaded):
    ```javascript
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Script load error'));
            document.head.appendChild(script);
        });

    loadScript('https://oinktech.github.io/LinkAware/@1.0.0/script.js')
        .then(() => {
            console.log('Script loaded successfully');
        })
        .catch(error => {
            console.error(error);
        });
    ```

3. **Using async and defer**:
    ```javascript
    const script = document.createElement('script');
    script.src = 'https://oinktech.github.io/LinkAware/@1.0.0/script.js';
    script.async = true; // Load immediately
    script.defer = true; // Execute after document parsing
    document.head.appendChild(script);
    ```

### Version Information
- **Version 1**: [1.0.0](https://oinktech.github.io/LinkAware/@1.0.0/script.js)
- **Version 2**: Coming soon

---

## 日本語

### プロジェクト紹介
LinkAwareは、ユーザーが外部リンクをクリックすると確認ダイアログを表示するJavaScriptツールです。このツールは、現在のサイトに属さないリンクへの偶発的な移動を防ぎ、法的免責事項を提供します。

### 使用方法

#### 静的インポート
次のコードをHTMLファイルに追加してください：
```html
<script src="https://oinktech.github.io/LinkAware/@1.0.0/script.js"></script>
```

#### 動的インポート
JavaScriptを使用してこのスクリプトを動的にインポートする方法はいくつかあります：

1. **基本的な方法**：
    ```javascript
    const script = document.createElement('script');
    script.src = 'https://oinktech.github.io/LinkAware/@1.0.0/script.js';
    document.head.appendChild(script);
    ```

2. **Promiseを使用**（スクリプトの読み込みが完了したことを確認）：
    ```javascript
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('スクリプトの読み込みエラー'));
            document.head.appendChild(script);
        });

    loadScript('https://oinktech.github.io/LinkAware/@1.0.0/script.js')
        .then(() => {
            console.log('スクリプトが正常に読み込まれました');
        })
        .catch(error => {
            console.error(error);
        });
    ```

3. **async と defer を使用**：
    ```javascript
    const script = document.createElement('script');
    script.src = 'https://oinktech.github.io/LinkAware/@1.0.0/script.js';
    script.async = true; // すぐに読み込む
    script.defer = true; // ドキュメントの解析が完了した後に実行
    document.head.appendChild(script);
    ```

### バージョン情報
- **バージョン1**: [1.0.0](https://oinktech.github.io/LinkAware/@1.0.0/script.js)
- **バージョン2**: 近日公開予定
```

