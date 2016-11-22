import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inlineView, customElement, children} from '../common/common';
import {Util} from '../common/util';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}tree-grid-column`)
@generateBindables('columns', ['allowFiltering', 'allowSorting', 'allowCellSelection', 'editType', 'field', 'filterEditType', 'headerText', 'showCheckbox', 'visible', 'headerTemplateID', 'format', 'isTemplateColumn', 'headerTextAlign', 'isFrozen', 'textAlign', 'templateID', 'allowEditing', 'allowFreezing'])

export class TreeGridColumn {
  @children(`${constants.elementPrefix}template`) template = [];
  setTemplates() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}

