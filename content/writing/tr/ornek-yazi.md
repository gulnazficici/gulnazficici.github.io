---
title: Örnek yazı — tasarım denemesi
description: Bu bir taslak. Yazı sayfasının başlıklar, alıntılar, listeler ve kod bloklarıyla nasıl göründüğünü test etmek için var.
date: 2026-09-29
tags: [meta]
draft: true
---

Bu yazı `draft: true` olduğu için sadece yerelde, `npm run dev` ile görünür. Yayına çıkan sitede yer almaz. Kendi ilk yazını eklediğinde bu dosyayı silebilirsin.

## Yeni bir yazı nasıl eklenir

`content/writing/tr/` klasörüne yeni bir `.md` dosyası ekle. Dosya adı, yazının adresi olur: `ilk-urunum.md` → `/writing/ilk-urunum`.

1. En üste başlık, açıklama ve tarih bilgisini yaz.
2. Altına Markdown ile yazını yaz.
3. `develop` branch'ine commit'le, `main`'e merge edince yayında.

> İyi bir yazı, okurun bir sorusuna cevap verir ya da ona yeni bir soru sordurur.

## Çeviri eklemek

Aynı dosya adıyla `content/writing/en/` altına İngilizce versiyonu koyarsan, iki yazı otomatik olarak birbirine bağlanır ve yazının başında dil linki görünür.

```swift
struct ContentView: View {
    var body: some View {
        Text("Merhaba, dünya")
    }
}
```

---

Hepsi bu kadar.
