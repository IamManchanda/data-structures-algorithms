/**
 * Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * Solution Ref: https://www.udemy.com/share/103J2KAEsSeFtRQX4=/
 */

{
  function TrieNode() {
    this.end = false;
    this.keys = {};
  }

  function Trie() {
    this.root = new TrieNode();
  }

  Trie.prototype.insert = function (word, node = this.root) {
    if (word.length === 0) {
      node.end = true;
      return;
    } else if (!node.keys[word[0]]) {
      node.keys[word[0]] = new TrieNode();
      this.insert(word.substring(1), node.keys[word[0]]);
    } else {
      this.insert(word.substring(1), node.keys[word[0]]);
    }
  };

  Trie.prototype.search = function (word, node = this.root) {
    if (word.length === 0 && node.end) {
      return true;
    } else if (word.length === 0) {
      return false;
    } else if (!node.keys[word[0]]) {
      return false;
    } else {
      return this.search(word.substring(1), node.keys[word[0]]);
    }
  };

  Trie.prototype.startsWith = function (prefix, node = this.root) {
    if (prefix.length === 0) {
      return true;
    } else if (!node.keys.hasOwnProperty(prefix[0])) {
      return false;
    } else {
      return this.startsWith(prefix.substring(1), node.keys[prefix[0]]);
    }
  };

  const trie = new Trie();

  trie.insert("apple");

  console.log(`trie.search("apple"):`, trie.search("apple")); // true
  console.log(`trie.search("app"):`, trie.search("app")); // false
  console.log(`trie.startsWith("app"):`, trie.startsWith("app")); // true

  trie.insert("dog");
  trie.insert("app");

  console.log(`trie.search("app"):`, trie.search("app")); // true
}
