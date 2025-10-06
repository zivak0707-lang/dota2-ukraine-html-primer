import dota2Hero from "@/assets/dota2-hero.jpg";
import invokerHero from "@/assets/invoker.jpg";
import dota2Logo from "@/assets/dota2-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={dota2Hero} 
            alt="Dota 2 Battle Scene" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <img 
            src={dota2Logo} 
            alt="Dota 2 Logo" 
            width={120} 
            height={120}
            className="mx-auto mb-6 animate-fade-in"
            title="Логотип Dota 2"
          />
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in"
            title="Головний заголовок сайту про Dota 2"
          >
            Моя улюблена гра — Dota 2
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Dota 2 — це командна стратегічна гра 5 на 5, у якій перемога залежить від тактики, реакції та командної взаємодії.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* About Section */}
        <section className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Про гру</h2>
          <hr className="border-border mb-6" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Dota 2 — це безкоштовна багатокористувацька онлайн-гра в жанрі MOBA (Multiplayer Online Battle Arena), 
                розроблена компанією <strong>Valve Corporation</strong>. Гра офіційно вийшла <time dateTime="2013-07-09">9 липня 2013 року</time>.
              </p>
              
              <p className="text-lg leading-relaxed">
                У грі беруть участь дві команди по п'ять гравців. Кожен гравець керує унікальним героєм зі своїми 
                здібностями. Мета — знищити головну будівлю ворожої команди, яка називається "Ancient".
              </p>

              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground bg-muted p-4 rounded">
                "Dota 2 — це не просто гра, це спосіб життя для мільйонів гравців по всьому світу!"
              </blockquote>

              <p className="text-lg leading-relaxed">
                <strong>Цікавий факт:</strong> Призовий фонд турніру The International 2019 перевищив 34 мільйони доларів США, 
                що зробило його одним з найбільших в історії кіберспорту!
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src={dota2Hero} 
                alt="Dota 2 gameplay screenshot showing epic battle" 
                width={500} 
                height={300}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Heroes Section */}
        <section className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-3xl font-bold mb-6 text-center text-secondary">Популярні герої</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-6">
                <li className="bg-muted p-4 rounded-lg hover:bg-muted/70 transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-2">1. Invoker</h3>
                  <p className="text-muted-foreground">
                    Один з найскладніших героїв у грі. Invoker може створювати унікальні комбінації заклинань 
                    з десяти різних здібностей, що робить його улюбленцем досвідчених гравців.
                  </p>
                </li>

                <li className="bg-muted p-4 rounded-lg hover:bg-muted/70 transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-2">2. Pudge</h3>
                  <p className="text-muted-foreground">
                    Культовий герой Dota 2, відомий своїм гачком, який може витягнути ворога з безпечної позиції. 
                    Один з найбільш популярних героїв серед гравців будь-якого рівня.
                  </p>
                </li>

                <li className="bg-muted p-4 rounded-lg hover:bg-muted/70 transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-2">3. Lina</h3>
                  <p className="text-muted-foreground">
                    Вогняна чарівниця з потужними магічними атаками. Lina може миттєво знищити ворога своїм 
                    ультимативним заклинанням "Laguna Blade".
                  </p>
                </li>

                <li className="bg-muted p-4 rounded-lg hover:bg-muted/70 transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-2">4. Juggernaut</h3>
                  <p className="text-muted-foreground">
                    Універсальний герой-войовник, здатний як атакувати, так і лікувати себе. Його ультимейт 
                    "Omnislash" наносить величезну шкоду декільком ворогам.
                  </p>
                </li>

                <li className="bg-muted p-4 rounded-lg hover:bg-muted/70 transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-2">5. Phantom Assassin</h3>
                  <p className="text-muted-foreground">
                    Смертоносна вбивця з можливістю наносити критичні удари з величезною силою. 
                    PA — улюблений вибір для любителів агресивного стилю гри.
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <img 
                src={invokerHero} 
                alt="Invoker hero from Dota 2" 
                width={400} 
                height={400}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Tournaments Section */}
        <section className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-3xl font-bold mb-6 text-center text-accent">Турніри з Dota 2</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-border" cellPadding={12}>
              <caption className="text-xl font-semibold mb-4 text-primary">
                Найвідоміші турніри Dota 2
              </caption>
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border text-left p-4 font-bold text-primary">Назва турніру</th>
                  <th className="border border-border text-left p-4 font-bold text-primary">Рік</th>
                  <th className="border border-border text-left p-4 font-bold text-primary">Призовий фонд</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="border border-border p-4">The International</td>
                  <td className="border border-border p-4">2024</td>
                  <td className="border border-border p-4 text-secondary font-bold">$40,000,000</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="border border-border p-4">ESL One</td>
                  <td className="border border-border p-4">2023</td>
                  <td className="border border-border p-4 text-secondary font-bold">$1,000,000</td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="border border-border p-4">DPC Major</td>
                  <td className="border border-border p-4">2022</td>
                  <td className="border border-border p-4 text-secondary font-bold">$500,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-border" />

        {/* Personal Section */}
        <section className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Чому я люблю Dota 2</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed" style={{ color: 'hsl(210 100% 50%)' }}>
              Я люблю Dota 2 за її динамічність і можливість грати з друзями. Кожна гра унікальна 
              і непередбачувана!
            </p>

            <p className="text-lg leading-relaxed">
              Найбільше мені подобається той факт, що в Dota 2 немає двох однакових матчів. 
              Навіть граючи на одному герої, кожен раз доводиться адаптуватися до нової ситуації, 
              до стратегії противника та складу команди.
            </p>

            <p className="text-lg leading-relaxed" style={{ color: 'hsl(280 70% 55%)' }}>
              Командна робота та комунікація — ось що робить Dota 2 такою захоплюючою. 
              Відчуття перемоги після напруженого матчу незрівнянне!
            </p>

            <p className="text-lg leading-relaxed">
              Також мене вражає професійна кіберспортивна сцена Dota 2. Дивитися на професійних 
              гравців — це як спостерігати за справжнім мистецтвом гри.
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* Links Section */}
        <section className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-3xl font-bold mb-6 text-center text-secondary">Корисні посилання</h2>
          
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li>
              <a 
                href="https://www.dota2.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Перейти на офіційний сайт Dota 2"
                className="block p-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg font-medium"
              >
                🎮 Офіційний сайт Dota 2
              </a>
            </li>

            <li>
              <a 
                href="https://store.steampowered.com/app/570/Dota_2/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Завантажити Dota 2 у Steam"
                className="block p-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg font-medium"
              >
                💨 Сторінка Dota 2 у Steam
              </a>
            </li>

            <li>
              <a 
                href="https://www.w3schools.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Навчальні матеріали з HTML, CSS, JavaScript"
                className="block p-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg font-medium"
              >
                📚 W3Schools — Навчання веб-розробки
              </a>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border">
        <hr className="border-border mb-4" />
        <p 
          className="text-center py-8 text-muted-foreground"
          style={{ textAlign: 'center' }}
        >
          Автор сайту: Зівак Сергій 371гр. © 2025
        </p>
      </footer>
    </div>
  );
};

export default Index;
