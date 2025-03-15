export default class Section {
  constructor({ items, renderer }, sectionSelector) {
    this._items = items;
    this._renderer = renderer;
    this._section = document.querySelector(sectionSelector);
  }

  addItems(element) {
    this._section.prepend(element);
  }

  renderItems() {
    this._items?.forEach((item) => {
      this._renderer(item);
    });
  }
}
