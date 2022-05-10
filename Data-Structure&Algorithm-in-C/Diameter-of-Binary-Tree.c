
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
// maxDepth表示从根节点出发到达的最远的路径
int maxDepth(struct TreeNode* root){
    if(root == NULL) return 0;
    int leftMax = maxDepth(root->left);
    int rightMax = maxDepth(root->right);
    return (leftMax > rightMax ? leftMax : rightMax) + 1;
}

int diameterOfBinaryTree(struct TreeNode* root){
    if(root == NULL) return 0;
    // 1)经过根节点
    int middle = maxDepth(root->left) + maxDepth(root->right);
       
    // 2)不经过根节点
    // 直径在左边
    int left = diameterOfBinaryTree(root->left);
    // 直径在右边
    int right = diameterOfBinaryTree(root->right);
    int max = middle;
    if(right > max){
        max = right;
    }
    if(left > max){
        max = left;
    }
    return max;
}