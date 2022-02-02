import { Widget } from './widget';
import { UiRef } from '../../schema';
import { runInAction } from 'mobx';

export class RefWidget extends Widget {
    protected get ui(): UiRef { return this._ui as UiRef };

    setReadOnly(value: boolean) { this.readOnly = value }
    setDisabled(value: boolean) { this.disabled = value }

    protected onClick = async () => {
        let ref = this.ui?.ref;
        if (ref === undefined) {
            alert('no ref defined!');
            return;
        }
        let id = await ref.pick();
        runInAction(() => {
            this.setDataValue(id);
            this.clearError();
            this.clearContextError();
            this.checkRules();
        });
    }

    setValue(value: any) {
        super.setValue(value);
    }

    render() {
        let ref = this.ui?.ref;
        if (ref === undefined) {
            return <span>no ref defined!</span>;
        }
        return ref.render();
    }
}
