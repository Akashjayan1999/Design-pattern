import React from 'react';

interface TreeNodeProps {
  node: {
    id: number;
    name: string;
    children: Array<{ id: number; name: string; children: any[] }>;
  };
}

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <div>{node.name}</div>
      {node.children && node.children.length > 0 && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;