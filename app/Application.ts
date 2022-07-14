import UI from './UI';

export default class Application {
    private _ui: UI;

    constructor() {
        this._ui = new UI();
    }
}
