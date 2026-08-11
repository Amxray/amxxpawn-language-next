# AMXXPawn Language - Next

<p align="center">
  <img src="images/extension-logo.png" alt="AMXXPawn Language Next Logo" width="128">
  <h1 align="center">AMXXPawn Language - Next</h1>
</p>

<p align="center">
  <strong>A modern, extended development experience for the classic AMXXPawn language, directly inside your VS Code.</strong>
</p>

> [!IMPORTANT]
> **DISCLAIMER:** This extension ("AMXXPawn Language - Next") is a **fork** of [AMXXPawn Language - Extended](https://github.com/NiceFeatures/amxxpawn-language) (which itself is a fork of the original [AMXXPawn Language](https://marketplace.visualstudio.com/items?itemName=KliPPy.amxxpawn-language) extension by KliPPy). It is not affiliated with the original authors. This fork includes specific improvements, updated features, local workflow enhancements, and further syntax/compilation adjustments built upon previous iterations.

<p align="center">
    <a href="#">
        <img alt="Visual Studio Marketplace Version" src="https://img.shields.io/badge/Marketplace-v1.0.0-blue?style=for-the-badge">
    </a>
    <a href="#">
        <img alt="Visual Studio Marketplace Installs" src="https://img.shields.io/badge/Installs-0-blue?style=for-the-badge">
    </a>
    <a href="#">
        <img alt="Open VSX Installs" src="https://img.shields.io/badge/Open--VSX-0-blue?style=for-the-badge">
    </a>
</p>

---

This project resurrects and modernizes the development experience for **AMX Mod X** scripters. If you love creating plugins for Half-Life, Counter-Strike 1.6, and other GoldSrc mods, but miss modern development tools, this extension is for you.

It transforms VS Code into a powerful IDE for Pawn, bringing features that were previously exclusive to newer programming languages.

## ✨ Key Features (Next Version)

Building upon the foundations of the **Extended** and original versions, **AMXXPawn Language - Next** delivers optimizations tailored for local and custom workflows, alongside a complete set of **Language Server** tools:

* **🟢 Advanced IntelliSense:** Auto-completion for functions, constants, and variables.
* **🎯 Smart Code Navigation (`Go to Definition`):** Press `Ctrl+Click` to instantly jump to the definition of:
    * Functions (including `public`, `stock`, `native`, and `@`-prefixed functions).
    * Constants defined with `#define`.
    * Global variables.
    * **Task Functions:** Navigate directly to a function when its name is passed as a string literal (e.g., `set_task_ex(..., "my_function", ...)`).
* **🔍 Find All References:** Press `Shift+F12` on any symbol to locate all occurrences within the current document and loaded include files.
* **✏️ Rename Symbol:** Press `F2` to rename variables, functions, or constants document-wide — with safety protection against renaming reserved Pawn keywords.
* **💡 Hover Information:** Hover over a function or variable to view its full declaration without leaving your context.
* **⚡ Real-time Diagnostics:** Alerts you if an `#include` file cannot be found, helping you catch errors prior to compilation.

## 🚀 Installation

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Open the **Extensions** tab (`Ctrl+Shift+X`).
3. Search for `AMXXPawn Language Next`.
4. Click **Install**.
5. Reload VS Code and enjoy!

## 🛠️ For Developers and Contributors

This project is a modernization built on top of the AMXXPawn Language - Extended and original codebases, utilizing TypeScript and the latest vscode-languageclient APIs. Contributions are highly welcome!

To build and test locally:

1. Clone the repository: git clone <your-repository-url>
2. Install dependencies: npm install
3. Build and bundle (esbuild): npm run esbuild
4. Open the project in VS Code and press F5 to start a debugging session.

## 🙏 Acknowledgments

This project is a continuation and evolution of AMXXPawn Language - Extended and the original work created by KliPPy. Full credit for the foundational groundwork and original idea goes to the respective original authors and contributors.

## 📄 License

This project is licensed under the GPL-3.0 License. See the LICENSE file for details.
