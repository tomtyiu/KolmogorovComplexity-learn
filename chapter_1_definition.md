# Chapter 1: Definition of Kolmogorov Complexity
# 第1章：コルモゴロフ複雑性の定義

In algorithmic information theory, the **Kolmogorov complexity** of a string $x$ is defined as the length of the shortest program $p$ that outputs $x$ on a universal Turing machine $U$:
$$
K_U(x) = \min_{U(p) = x} |p|.
$$

アルゴリズム情報理論において、文字列$x$の**コルモゴロフ複雑性**は、普遍チューリングマシン$U$上で出力が$x$となる最短プログラム$p$の長さとして定義されます：
$$
K_U(x) = \min_{U(p) = x} |p|.
$$