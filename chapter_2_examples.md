# Chapter 2: Examples and Python Snippets
# 第2章：例とPythonスニペット

We can approximate the Kolmogorov complexity of a string by compressing it using a standard compressor (e.g., `zlib`) and measuring the compressed size:

標準的な圧縮ツール（例：`zlib`）を用いて文字列を圧縮し、圧縮後のサイズを測定することで、コルモゴロフ複雑性を近似できます：

```{code-cell} ipython3
import zlib

def approx_kolmogorov_complexity(s: str) -> int:
    """Approximate Kolmogorov complexity using zlib compressor."""
    compressed = zlib.compress(s.encode('utf-8'))
    return len(compressed)

# Examples
for text in ['aaaaaa', 'abcdefg', 'To be or not to be, that is the question.']:
    print(text, approx_kolmogorov_complexity(text))
```

```{code-cell} ipython3
# 例を実行
for text in ['aaaaaa', 'abcdefg', 'To be or not to be, that is the question.']:
    print(text, approx_kolmogorov_complexity(text))
```