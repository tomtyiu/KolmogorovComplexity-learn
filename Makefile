.PHONY: ebook pdf

SCENARIOS := docs/index.md \
             docs/chapter_1_definition.md \
             docs/chapter_2_examples.md \
             docs/chapter_3_quizzes.md

ebook:
	pandoc $(SCENARIOS) \
	  -o KolmogorovComplexity.epub \
	  --toc --toc-depth=2 \
	  --metadata title="Kolmogorov Complexity: An Interactive Bilingual Ebook" \
	  --metadata author="Tom Yiu" \
	  --metadata lang="en,ja" \
	  --mathml

pdf:
	pandoc $(SCENARIOS) \
	  -o KolmogorovComplexity.pdf \
	  --toc --toc-depth=2 \
	  --metadata title="Kolmogorov Complexity: An Interactive Bilingual Ebook" \
	  --metadata author="Tom Yiu" \
	  --metadata lang="en,ja" \
	  --pdf-engine=pdflatex