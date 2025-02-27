/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => WrapWithShortcut
});
var import_obsidian3 = __toModule(require("obsidian"));

// src/SettingsTab.ts
var import_obsidian2 = __toModule(require("obsidian"));

// src/WrapperCreatorModal.ts
var import_obsidian = __toModule(require("obsidian"));
var WrapperCreatorModal = class extends import_obsidian.Modal {
  constructor(plugin, wrapper) {
    super(plugin.app);
    if (wrapper) {
      this.wrapper = wrapper;
      this.editMode = true;
    } else {
      this.wrapper = { id: `w${new Date().getTime()}`, name: "", startTag: "", endTag: "" };
      this.editMode = false;
    }
  }
  onOpen() {
    super.onOpen();
    this.display();
  }
  display() {
    const { contentEl: el } = this;
    el.empty();
    this.titleEl.setText(this.editMode ? "Edit wrapper" : "Add a new wrapper");
    new import_obsidian.Setting(el).setName("Name").setDesc("Specify the Name of your wrapper.").addText((cb) => {
      var _a;
      cb.setValue((_a = this.wrapper.name) != null ? _a : "").onChange((value) => {
        this.wrapper.name = value.trim();
      });
    });
    new import_obsidian.Setting(el).setName("Start Tag").setDesc("Specify the start tag").addTextArea((cb) => {
      var _a;
      cb.setValue((_a = this.wrapper.startTag) != null ? _a : "").onChange((value) => {
        this.wrapper.startTag = value;
      });
    });
    new import_obsidian.Setting(el).setName("End Tag").setDesc("Specify the end tag").addTextArea((cb) => {
      var _a;
      cb.setValue((_a = this.wrapper.endTag) != null ? _a : "").onChange((value) => {
        this.wrapper.endTag = value;
      });
    });
    const btnDiv = el.createDiv({ cls: "M-flex-center" });
    const btn = createEl("button", { text: "Finish" });
    btnDiv.appendChild(btn);
    btn.addEventListener("click", () => {
      const eventName = this.editMode ? "M-wrapperEditted" : "M-wrapperAdded";
      dispatchEvent(new CustomEvent(eventName, {
        detail: this.wrapper
      }));
      this.close();
    });
  }
};

// src/SettingsTab.ts
var SettingsTab = class extends import_obsidian2.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
    addEventListener("M-wrapperAdded", (e) => __async(this, null, function* () {
      this.plugin.settings.wrapperTags.push(e.detail);
      this.sortSettings();
      yield this.plugin.saveSettings();
      new import_obsidian2.Notice("You will need to restart Obsidian to use it.");
      this.display();
    }));
    addEventListener("M-wrapperEditted", (e) => __async(this, null, function* () {
      const tags = this.plugin.settings.wrapperTags;
      const index = tags.findIndex((tag) => tag.name === e.detail.name);
      if (index === -1) {
        this.plugin.settings.wrapperTags.push(e.detail);
      } else {
        this.plugin.settings.wrapperTags = [...tags.slice(0, index), e.detail, ...tags.slice(index + 1)];
      }
      this.sortSettings();
      yield this.plugin.saveSettings();
      if (index === -1) {
        new import_obsidian2.Notice("You will need to restart Obsidian to use it.");
      }
      this.display();
    }));
  }
  sortSettings() {
    this.plugin.settings.wrapperTags.sort(function(a, b) {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Wrapper Settings" });
    new import_obsidian2.Setting(containerEl).setName("Add a new wrapper with a shortcut").setDesc("Create a new wrapper to wrap the selected text in the custom tags.").addButton((cb) => {
      cb.setButtonText("+").onClick(() => {
        new WrapperCreatorModal(this.plugin).open();
      });
    });
    this.plugin.settings.wrapperTags.forEach((wrapperTag) => {
      const desc = `Press Hotkey => ${wrapperTag.startTag}{selectedText}${wrapperTag.endTag}`;
      new import_obsidian2.Setting(containerEl).setName(wrapperTag.name).setDesc(desc).addExtraButton((bt) => {
        bt.setIcon("pencil");
        bt.onClick(() => __async(this, null, function* () {
          new WrapperCreatorModal(this.plugin, wrapperTag).open();
        }));
      }).addExtraButton((bt) => {
        bt.setIcon("trash");
        bt.onClick(() => __async(this, null, function* () {
          this.plugin.settings.wrapperTags.remove(wrapperTag);
          this.display();
          new import_obsidian2.Notice("You will need to restart Obsidian to fully remove the Wrapper.");
          yield this.plugin.saveSettings();
        }));
      });
    });
  }
};

// main.ts
var DEFAULT_SETTINGS = {
  wrapperTags: [
    {
      id: "underline",
      name: "Underline",
      startTag: "<u>",
      endTag: "</u>"
    }
  ]
};
var WrapWithShortcut = class extends import_obsidian3.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      if (this.settings.wrapperTags.length > 0 && !this.settings.wrapperTags[0].id) {
        yield this.applyWrapperTagID();
      }
      this.settings.wrapperTags.forEach((wrapperTag, index) => {
        const command = {
          id: `wrap-with-shortcut-${wrapperTag.id}`,
          name: `Toggle ${wrapperTag.name}`,
          editorCallback: (editor) => this.wrapSelectedTextIn(editor, wrapperTag.startTag, wrapperTag.endTag)
        };
        this.addCommand(command);
      });
      this.addSettingTab(new SettingsTab(this));
    });
  }
  wrapSelectedTextIn(editor, startTag = "<u>", endTag = "</u>") {
    if (startTag === "" && endTag === "") {
      return;
    }
    const selectedText = editor.getSelection();
    function toPos(editor2, pos) {
      return editor2.offsetToPos(pos);
    }
    function getRange(editor2, from, to) {
      try {
        return editor2.getRange(toPos(editor2, from), toPos(editor2, to));
      } catch (_) {
        return "";
      }
    }
    const fos = editor.posToOffset(editor.getCursor("from"));
    const tos = editor.posToOffset(editor.getCursor("to"));
    const len = selectedText.length;
    const beforeText = getRange(editor, fos - startTag.length, tos - len);
    const afterText = getRange(editor, fos + len, tos + endTag.length);
    const startText = getRange(editor, fos, fos + startTag.length);
    const endText = getRange(editor, tos - endTag.length, tos);
    if (beforeText === startTag && afterText === endTag) {
      editor.setSelection(toPos(editor, fos - startTag.length), toPos(editor, tos + endTag.length));
      editor.replaceSelection(selectedText);
      editor.setSelection(toPos(editor, fos - startTag.length), toPos(editor, tos - startTag.length));
    } else if (startText === startTag && endText === endTag) {
      editor.replaceSelection(editor.getRange(toPos(editor, fos + startTag.length), toPos(editor, tos - endTag.length)));
      editor.setSelection(toPos(editor, fos), toPos(editor, tos - (startTag.length + endTag.length)));
    } else {
      editor.replaceSelection(`${startTag}${selectedText}${endTag}`);
      editor.setSelection(toPos(editor, fos + startTag.length), toPos(editor, tos + startTag.length));
    }
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
  applyWrapperTagID() {
    return __async(this, null, function* () {
      this.settings.wrapperTags.forEach((wrapperTag, index) => {
        wrapperTag.id || (wrapperTag.id = `${index}`);
      });
      yield this.saveSettings();
    });
  }
};

/* nosourcemap */