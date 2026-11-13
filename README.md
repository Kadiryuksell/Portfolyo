# Kadir Kağan Yüksel — Portfolyo

Data Engineer · Big Data & Backend Developer olarak deneyimlerimi, projelerimi ve eğitimimi tanıttığım kişisel portfolyo sitesi.

## Özellikler

- **Çift dil (TR / EN):** Tek tıkla Türkçe ↔ İngilizce geçiş; tercih tarayıcıda hatırlanır.
- **Açık / koyu tema:** Sistem temasını otomatik algılar, elle de değiştirilebilir.
- **Responsive tasarım:** Masaüstü, tablet ve mobilde uyumlu.
- **Sıfır bağımlılık:** Framework veya build aracı yok; saf HTML, CSS ve JavaScript.
- **Kaydırma animasyonları:** `IntersectionObserver` ile bölümler görünür oldukça belirir.

## Bölümler

Hakkımda · Deneyim · Projeler · Yetenekler · Eğitim & Sertifikalar · İletişim

## Teknolojiler

`HTML5` `CSS3` `Vanilla JavaScript` `Google Fonts (Inter, JetBrains Mono)`

## Proje Yapısı

```
.
├── index.html      # Sayfa iskeleti
├── style.css       # Stiller, tema değişkenleri ve responsive kurallar
├── main.js         # İçeriği oluşturma, dil/tema geçişi, menü ve animasyonlar
├── i18n.js         # Tüm metin içeriği (TR ve EN)
└── assets/
    └── profile.jpg # Profil fotoğrafı
```

## Çalıştırma

Kurulum gerekmez. `index.html` dosyasını tarayıcıda açmanız yeterli.

İsterseniz yerel bir sunucuyla da çalıştırabilirsiniz:

```bash
python -m http.server 8000
# http://localhost:8000
```

## İçeriği Güncelleme

Sitedeki tüm metinler (deneyimler, projeler, yetenekler, eğitim vb.) `i18n.js` dosyasında `tr` ve `en` anahtarları altında tutulur. İçerik değiştirmek için HTML'e dokunmanıza gerek yoktur; ilgili alanı her iki dilde de güncellemeniz yeterlidir.

## İletişim

- **E-posta:** [kadirkaganyukseldeveloper@gmail.com](mailto:kadirkaganyukseldeveloper@gmail.com)
- **LinkedIn:** [linkedin.com/in/kadirkaganyuksel](https://www.linkedin.com/in/kadirkaganyuksel/)
- **GitHub:** [github.com/Kadiryuksell](https://github.com/Kadiryuksell)
- **Medium:** [medium.com/@kadirKaganYuksel](https://medium.com/@kadirKaganYuksel)

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.
