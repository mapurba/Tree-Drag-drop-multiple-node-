import { Component, ViewChild } from '@angular/core';
import {
  TreeComponent,
  TREE_ACTIONS,
  TreeModel,
  TreeNode,
} from 'angular-tree-component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('treeComponent')
  public treeComponent: TreeComponent;

  nodes = [
    {
      name: 'Root1',
      children: [
        { name: 'Child1' },
        { name: 'Child2' },
        { name: 'Child3' },
        { name: 'Child4' },
        { name: 'Child5' },
        { name: 'Child6' },
        { name: 'Child7' },
      ],
    },
    { name: 'Root2', children: [{ name: 'Node1' }] },
  ];

  actionMapping = {
    mouse: {
      click: (tree, node, $event) => {
        if ($event.shiftKey) {
          //click with CTRL
          TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event);
        } else {
          TREE_ACTIONS.ACTIVATE(tree, node, $event);
        }
      },
      drop: (tree, node, $event, { from, to }) => {
        const activeNodes = tree.getActiveNodes();
        if (activeNodes.length > 1) {
          activeNodes.forEach((item) => {
            const currentItem = tree.getNodeById(item.id);
            tree.moveNode(currentItem, to);
          });
        } else {
          tree.moveNode(from, to);
        }
      },
    },
  };

  options = {
    allowDrag: true,
    allowDrop: true,
    actionMapping: this.actionMapping,
  };
}
