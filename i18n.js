// Tüm site içeriği burada — metinleri güncellemek için sadece bu dosyayı düzenle.
const I18N = {
  tr: {
    nav: { about: "Hakkımda", experience: "Deneyim", projects: "Projeler", skills: "Yetenekler", education: "Eğitim", contact: "İletişim" },
    hero: {
      status: "Yeni fırsatlara açığım",
      role: "Data Engineer · Big Data & Backend Developer",
      lead: "Apache Spark, Hadoop, Hive ve ClickHouse ile büyük ölçekli veri hatları tasarlıyor, ham veriyi iş kararlarını besleyen güvenilir içgörülere dönüştürüyorum.",
      cta1: "İletişime geç",
      cta2: "Projelerimi gör"
    },
    stats: { own: "Sorumluluk", adapt: "Hızlı Adaptasyon", solve: "Problem Çözme", learn: "Sürekli Öğrenme", team: "Takım Çalışması" },
    about: {
      title: "Hakkımda",
      p1: "Küresel bir teknoloji ortamında büyük ölçekli veri hatları tasarlama ve optimize etme konusunda uygulamalı deneyime sahip bir Data Engineer'ım.",
      p2: "Dağıtık işleri kararlılık ve performans için ayarlama, uçtan uca veri doğruluğunu koruma ve ham veriyi iş odaklı dashboard'lara dönüştürme konularında uzmanım. Backend geliştirme (C#, .NET Core, Java, RESTful API) temelimi Microsoft Azure bilgisi ve veri mühendisliği odaklı tezli yüksek lisansımla birleştiriyorum. Amacım; analitik ve veri odaklı karar almayı güçlendiren, güvenilir veri platformları inşa etmek.",
      competencies: ["Veri Mühendisliği", "Büyük Veri İşleme", "ETL & Veri Hatları", "Veri Kalitesi & Yönetişimi", "İş Zekası & Dashboard'lar", "Backend Geliştirme", "Bulut Temelleri", "Veri Analitiği"]
    },
    exp: {
      title: "Deneyim",
      more: "Devamını gör",
      less: "Daha az göster",
      jobs: [
        {
          company: "Huawei",
          title: "Assistant Data Engineer",
          date: "Eylül 2025 – Eylül 2026",
          loc: "İzmir, Türkiye",
          points: [
            "AppGallery arama ve öneri dashboard'larında uçtan uca ETL akışlarını doğrulayarak veri doğruluğunu ve sürekliliğini sağladım; iş birimlerine güvenilir günlük raporlama sundum.",
            "Apache Spark batch işlerini yürütme ve konfigürasyon parametreleriyle optimize ederek milyonlarca kayıt işleyen iş yüklerinde kararlılığı artırdım, çalışma sürelerini kısalttım.",
            "Spark ve Hadoop YARN loglarını analiz ederek iş hatalarını tespit edip çözdüm; pipeline güvenilirliğini artırdım ve tekrarlayan kesintileri azalttım.",
            "Dashboard veri tutarsızlıklarının kök nedenini kaynak sistemlere veya iş mantığına kadar izleyerek veri bütünlüğünü yeniden sağladım.",
            "Genel merkez gereksinimleri doğrultusunda mevcut pipeline'lara yeni kolonlar ve iş mantığı ekleyerek, alt sistemleri bozmadan analitik kapsamı genişlettim.",
            "Bağımlılıkları yönetmek ve veri işleme verimini artırmak için DAG tabanlı iş akışları tasarlayıp yönettim.",
            "Hive, HDFS ve ClickHouse üzerinde boyutsal modelleme ile büyük veri setlerini modelleyip sorguladım.",
            "FineBI'da iş zekası dashboard'ları geliştirip sürdürerek büyük veri çıktılarını ürün ve iş ekipleri için aksiyon alınabilir içgörülere dönüştürdüm.",
            "Çözümlerin doğruluğunu ve kararlılığını izleyen süreçler kurdum; veri akışlarını ve iş mantığını belgeleyerek veri yönetişimini destekledim."
          ],
          tags: ["Apache Spark", "Hadoop", "HDFS", "Hive", "MapReduce", "ClickHouse", "SQL", "ETL", "FineBI", "CI/CD", "DAG", "Scrum"]
        },
        {
          company: "Bimar IT Services – Arkas Holding",
          title: "Full Stack Developer Intern",
          date: "Şubat 2024 – Haziran 2024",
          loc: "İzmir, Türkiye",
          points: [
            "Arkas Holding çalışanları için C#, .NET Core ve RESTful API backend'i, React ve TypeScript frontend'i ile bir Kişisel Dijital Asistan web platformu geliştirdim.",
            "MSSQL destekli RESTful API uç noktaları tasarlayıp entegre ederek güvenilir veri saklama ve verimli erişim sağladım.",
            "Responsive React / TypeScript arayüz bileşenleri geliştirerek dahili kullanıcıların günlük deneyimini iyileştirdim.",
            "Agile / Scrum ekibinde sprint planlama, code review ve iteratif teslimat süreçlerine katkı sağladım."
          ],
          tags: ["C#", ".NET Core", "REST API", "MSSQL", "React", "TypeScript", "Agile"]
        },
        {
          company: "Makronet Bilgi Teknolojileri",
          title: "Cloud Engineer Intern",
          date: "Temmuz 2023 – Ağustos 2023",
          loc: "İstanbul, Türkiye",
          points: [
            "Microsoft Azure AZ-900 ve AZ-104 eğitimlerini tamamlayarak bulut yönetimi ve mimarisi konusunda temel oluşturdum.",
            "Teknik toplantılarda farklı müşterilere ait kurumsal Azure mimarilerini inceleyerek bulut altyapı tasarımında pratik deneyim kazandım."
          ],
          tags: ["Microsoft Azure", "AZ-900", "AZ-104", "Cloud"]
        }
      ]
    },
    projects: {
      title: "Projeler",
      valueLabel: "İş değeri:",
      list: [
        {
          name: "NovaNest E-Commerce",
          url: "https://github.com/Kadiryuksell/NovaNest-E-Commerce",
          icon: "nlp",
          desc: "Müşteri yorumlarını NLP tabanlı duygu analiziyle içgörüye dönüştüren, sepet tahmini ile kişiselleştirilmiş öneriler sunan bir e-ticaret platformu.",
          value: "Duygu sınıflandırma pipeline'ı ve sepet tahmin modeli geliştirip full-stack MERN uygulamasına entegre ettim.",
          tags: ["React", "Node.js", "Express", "MongoDB", "Python", "NLP", "Streamlit"]
        },
        {
          name: "Car Gallery",
          url: "https://github.com/Kadiryuksell/Car_gallery_Project",
          icon: "car",
          desc: "Gerçek galeri operasyonlarını ve satış kurallarını modelleyen bir araç galerisi yönetim sistemi.",
          value: "Satılan araçların otomatik olarak satışa kapandığı, domain odaklı iş kuralları; listeleme, uygunluk kontrolü ve satın alma akışları.",
          tags: ["OOP", "REST API", "MSSQL", "PostgreSQL"]
        }
      ]
    },
    skills: {
      title: "Yetenekler",
      groups: [
        { name: "Big Data", items: ["Apache Spark", "Hadoop", "HDFS", "Hive", "YARN", "ClickHouse"] },
        { name: "Veri Mühendisliği & BI", items: ["ETL", "Boyutsal Modelleme", "DAG Orkestrasyonu", "Veri Kalitesi", "FineBI"] },
        { name: "Diller", items: ["Python", "SQL", "Java", "C#"] },
        { name: "Backend & Araçlar", items: [".NET Core", "Spring Boot", "REST API", "MSSQL", "PostgreSQL", "Git", "Azure (Temel)"] }
      ]
    },
    edu: {
      title: "Eğitim & Sertifikalar",
      certs: "Sertifikalar",
      langs: "Diller",
      list: [
        {
          degree: "Bilgisayar Mühendisliği Yüksek Lisans (Tezli)", school: "İzmir Bakırçay Üniversitesi", date: "Eyl 2025 – Haz 2027 (Beklenen)", gpa: "3.57",
          project: {
            label: "Tez",
            name: "BT Görüntülerinde Derin Öğrenme ile Böbrek Taşı Tespiti",
            points: [
              "Abdominal BT görüntülerinde böbrek taşını otomatik tespit ederek radyologlara ön tarama desteği sunan bir karar destek modeli geliştiriyorum (KidneyStoneTR veri kümesi).",
              "CNN (VGG16, DenseNet121, ResNet101, EfficientNet-B3, MobileNetV3), Vision Transformer ve hibrit (ViT, DeiT, Twins-SVT, MaxViT, MobileViT) ailelerinden 10 modeli transfer öğrenme ve 5-katlı çapraz doğrulama ile aynı protokolde karşılaştırıyorum.",
              "Ardışık BT kesitlerinden kaynaklanan veri sızıntısını sıralı blok ayırma ve kesit boşluğu yöntemiyle önleyerek, literatürdeki iyimser sonuçlara karşı gerçekçi bir başarı tahmini elde ediyorum.",
              "Model seçimini F1, ROC-AUC ve istatistiksel testlerle (eşleştirilmiş t-testi, Wilcoxon) yapıyor; seçilen modeli bağımsız test kümesinde bootstrap güven aralıklarıyla, yeniden üretilebilir şekilde değerlendiriyorum."
            ]
          }
        },
        {
          degree: "Bilgisayar Mühendisliği Lisans", school: "İzmir Bakırçay Üniversitesi", date: "Eyl 2021 – Haz 2024", gpa: "3.38",
          project: {
            label: "Bitirme Projesi",
            name: "NovaNest E-Commerce",
            url: "https://github.com/Kadiryuksell/NovaNest-E-Commerce",
            points: [
              "E-ticaret platformlarındaki ürün yorumları üzerinde NLP teknikleriyle duygu analizi yaparak yorumları olumlu veya olumsuz olarak sınıflandırdım; bu analizler platform yöneticilerine müşteri geri bildirimleri hakkında değerli içgörüler sunuyor.",
              "Geçmiş alışveriş davranışlarına dayanarak ürün önerilerini ve sepet içeriğini tahmin eden bir sepet tahmin sistemi geliştirdim.",
              "Projeyi MERN stack (MongoDB, Express.js, React.js, Node.js) ile geliştirdim; API testleri için VS Code ve Postman, versiyon kontrolü için Git/GitHub kullandım."
            ]
          }
        },
        { degree: "Bilgisayar Mühendisliği (Hazırlık Yılı)", school: "Karamanoğlu Mehmetbey Üniversitesi", date: "Eyl 2020 – Haz 2021", gpa: "3.83", note: "Lisansı tamamlamak için İzmir Bakırçay Üniversitesi'ne yatay geçiş yaptım." }
      ],
      certList: [
        { name: "JavaScript Developer Bootcamp", by: "Insider & Testinium Tech", yr: "2024" },
        { name: "Web Programlama 101 / 201 / 301", by: "Turkcell Geleceği Yazanlar", yr: "2022–23" },
        { name: "Java 101 / 201", by: "Turkcell Geleceği Yazanlar", yr: "2023" },
        { name: "Adım Adım SQL Veritabanı Programlama", by: "Udemy", yr: "2022" },
        { name: "Sıfırdan İleri Seviye Web Geliştirme", by: "Udemy", yr: "2022" }
      ],
      langList: [
        { name: "Türkçe", lvl: "Ana dil", pct: 100 },
        { name: "İngilizce", lvl: "Orta (B1)", pct: 55 }
      ]
    },
    contact: {
      title: "Birlikte çalışalım",
      text: "Veri mühendisliği, büyük veri veya backend projeleri hakkında konuşmak için bana her zaman ulaşabilirsiniz.",
      cta: "E-posta gönder",
      loc: "Fethiye, Muğla, Türkiye"
    },
    footer: "Tüm hakları saklıdır."
  },

  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", contact: "Contact" },
    hero: {
      status: "Open to new opportunities",
      role: "Data Engineer · Big Data & Backend Developer",
      lead: "I design large-scale data pipelines with Apache Spark, Hadoop, Hive and ClickHouse — turning raw data into reliable insights that drive business decisions.",
      cta1: "Get in touch",
      cta2: "View projects"
    },
    stats: { own: "Ownership", adapt: "Fast Adaptation", solve: "Problem Solving", learn: "Continuous Learning", team: "Teamwork" },
    about: {
      title: "About",
      p1: "I'm a Data Engineer with hands-on experience designing and optimizing large-scale big-data pipelines within a global technology environment.",
      p2: "I specialize in tuning distributed jobs for stability and performance, safeguarding end-to-end data accuracy, and translating raw data into business-ready dashboards. I combine a solid backend foundation (C#, .NET Core, Java, RESTful APIs) with Microsoft Azure fundamentals and a thesis-based master's focused on data engineering. My goal is to build reliable data platforms that power analytics and data-driven decision-making.",
      competencies: ["Data Engineering", "Big Data Processing", "ETL & Data Pipelines", "Data Quality & Governance", "BI & Dashboards", "Backend Development", "Cloud Fundamentals", "Data Analytics"]
    },
    exp: {
      title: "Experience",
      more: "Show more",
      less: "Show less",
      jobs: [
        {
          company: "Huawei",
          title: "Assistant Data Engineer",
          date: "September 2025 – September 2026",
          loc: "Izmir, Turkey",
          points: [
            "Ensured data accuracy and continuity across AppGallery search and recommendation dashboards by validating end-to-end ETL flows, sustaining reliable daily reporting.",
            "Optimized Apache Spark batch jobs by tuning execution and configuration parameters, improving stability and reducing execution times on workloads processing millions of records.",
            "Analyzed Spark and Hadoop YARN logs to detect and resolve job failures, increasing pipeline reliability and reducing recurring interruptions.",
            "Diagnosed dashboard data inconsistencies by tracing root causes to source systems or business logic, restoring data integrity and stakeholder trust.",
            "Enhanced existing pipelines with new columns and updated business logic from HQ requirements, expanding analytical coverage without disrupting downstream consumers.",
            "Designed and managed DAG-based workflow tasks to orchestrate dependencies and improve data-processing throughput.",
            "Modeled and queried large datasets across Hive, HDFS and ClickHouse using dimensional modeling for fast, accurate analytics.",
            "Built and maintained BI dashboards in FineBI, converting big-data outputs into actionable insights for product and business teams.",
            "Implemented monitoring for deployed solutions and documented data flows and business logic, supporting data governance across teams."
          ],
          tags: ["Apache Spark", "Hadoop", "HDFS", "Hive", "MapReduce", "ClickHouse", "SQL", "ETL", "FineBI", "CI/CD", "DAG", "Scrum"]
        },
        {
          company: "Bimar IT Services – Arkas Holding",
          title: "Full Stack Developer Intern",
          date: "February 2024 – June 2024",
          loc: "Izmir, Turkey",
          points: [
            "Developed a Personal Digital Assistant web platform for Arkas Holding employees with a C#, .NET Core and RESTful API backend and a React + TypeScript frontend.",
            "Designed and integrated RESTful API endpoints backed by MSSQL for reliable persistence and efficient retrieval.",
            "Built responsive React / TypeScript UI components, improving the day-to-day experience for internal users.",
            "Collaborated in an Agile / Scrum team across the full SDLC — sprint planning, code reviews and iterative delivery."
          ],
          tags: ["C#", ".NET Core", "REST API", "MSSQL", "React", "TypeScript", "Agile"]
        },
        {
          company: "Makronet Information Technology",
          title: "Cloud Engineer Intern",
          date: "July 2023 – August 2023",
          loc: "Istanbul, Turkey",
          points: [
            "Completed Microsoft Azure AZ-900 and AZ-104 training, building a foundation in cloud administration and architecture.",
            "Reviewed enterprise Azure architectures across multiple client environments, gaining practical exposure to cloud infrastructure design."
          ],
          tags: ["Microsoft Azure", "AZ-900", "AZ-104", "Cloud"]
        }
      ]
    },
    projects: {
      title: "Projects",
      valueLabel: "Business value:",
      list: [
        {
          name: "NovaNest E-Commerce",
          url: "https://github.com/Kadiryuksell/NovaNest-E-Commerce",
          icon: "nlp",
          desc: "An NLP-driven sentiment-analysis and cart-prediction platform that turns customer reviews into actionable insight and personalized recommendations.",
          value: "Built a sentiment-classification pipeline and a basket-prediction model, integrated into a full-stack MERN application.",
          tags: ["React", "Node.js", "Express", "MongoDB", "Python", "NLP", "Streamlit"]
        },
        {
          name: "Car Gallery",
          url: "https://github.com/Kadiryuksell/Car_gallery_Project",
          icon: "car",
          desc: "A car-dealership management system that models real-world gallery operations and sales rules.",
          value: "Domain-driven business rules — sold vehicles automatically become unavailable — with listing, availability checks and purchase workflows.",
          tags: ["OOP", "REST API", "MSSQL", "PostgreSQL"]
        }
      ]
    },
    skills: {
      title: "Skills",
      groups: [
        { name: "Big Data", items: ["Apache Spark", "Hadoop", "HDFS", "Hive", "YARN", "ClickHouse"] },
        { name: "Data Engineering & BI", items: ["ETL", "Dimensional Modeling", "DAG Orchestration", "Data Quality", "FineBI"] },
        { name: "Languages", items: ["Python", "SQL", "Java", "C#"] },
        { name: "Backend & Tools", items: [".NET Core", "Spring Boot", "REST API", "MSSQL", "PostgreSQL", "Git", "Azure (Fundamentals)"] }
      ]
    },
    edu: {
      title: "Education & Certifications",
      certs: "Certifications",
      langs: "Languages",
      list: [
        {
          degree: "M.Sc. in Computer Engineering (Thesis)", school: "Izmir Bakircay University", date: "Sep 2025 – Jun 2027 (Expected)", gpa: "3.57",
          project: {
            label: "Thesis",
            name: "Kidney Stone Detection in CT Images with Deep Learning",
            points: [
              "Developing a decision-support model that automatically detects kidney stones in abdominal CT images to provide radiologists with pre-screening support (KidneyStoneTR dataset).",
              "Comparing 10 models from CNN (VGG16, DenseNet121, ResNet101, EfficientNet-B3, MobileNetV3), Vision Transformer and hybrid (ViT, DeiT, Twins-SVT, MaxViT, MobileViT) families under a single protocol using transfer learning and 5-fold cross-validation.",
              "Preventing data leakage caused by consecutive CT slices through sequential block splitting and slice gaps, yielding a realistic performance estimate versus the optimistic results common in the literature.",
              "Selecting models with F1, ROC-AUC and statistical tests (paired t-test, Wilcoxon), then evaluating the chosen model on an independent test set with bootstrap confidence intervals, fully reproducibly."
            ]
          }
        },
        {
          degree: "B.Sc. in Computer Engineering", school: "Izmir Bakircay University", date: "Sep 2021 – Jun 2024", gpa: "3.38",
          project: {
            label: "Final Project",
            name: "NovaNest E-Commerce",
            url: "https://github.com/Kadiryuksell/NovaNest-E-Commerce",
            points: [
              "Performed sentiment analysis on product reviews from e-commerce platforms, using NLP techniques to classify customer reviews as positive or negative and give platform managers valuable insights into customer feedback.",
              "Developed a cart prediction system that forecasts product recommendations and cart content based on past shopping behavior.",
              "Built with the MERN stack (MongoDB, Express.js, React.js, Node.js); used VS Code and Postman for API testing and Git/GitHub for version control."
            ]
          }
        },
        { degree: "Computer Engineering (Foundational Year)", school: "Karamanoglu Mehmetbey University", date: "Sep 2020 – Jun 2021", gpa: "3.83", note: "Transferred to Izmir Bakircay University to complete the B.Sc." }
      ],
      certList: [
        { name: "JavaScript Developer Bootcamp", by: "Insider & Testinium Tech", yr: "2024" },
        { name: "Web Programming 101 / 201 / 301", by: "Turkcell Future Coders", yr: "2022–23" },
        { name: "Java 101 / 201", by: "Turkcell Future Coders", yr: "2023" },
        { name: "Step-by-Step SQL Database Programming", by: "Udemy", yr: "2022" },
        { name: "Web Development from Scratch to Advanced", by: "Udemy", yr: "2022" }
      ],
      langList: [
        { name: "Turkish", lvl: "Native", pct: 100 },
        { name: "English", lvl: "Intermediate (B1)", pct: 55 }
      ]
    },
    contact: {
      title: "Let's work together",
      text: "Feel free to reach out about data engineering, big data or backend projects — I'm always happy to talk.",
      cta: "Send an email",
      loc: "Fethiye, Mugla, Turkey"
    },
    footer: "All rights reserved."
  }
};
