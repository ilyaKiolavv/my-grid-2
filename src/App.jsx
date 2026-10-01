import Layout from './components/Layout.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const siteTitle = 'Мой React-сайт'
  const userName = 'Студент'

  return (
    <Layout siteTitle={siteTitle}>
      <Header title={siteTitle} userName={userName} />
      <Sidebar items={['Главная', 'О нас', 'Услуги', 'Контакты']} />
      {/* Мини-задание 3: сюда положили другой контент — вместо прежних
          пунктов меню теперь абзацы и нумерованный список. MainContent
          ничего не знает про их содержимое, он просто рендерит {children} */}
      <MainContent>
        <h1>CSS Grid на практике</h1>
        <p>
          Этот блок приходит в <code>MainContent</code> как{' '}
          <code>children</code> — компоненту всё равно, что внутри: текст,
          список или другой компонент.
        </p>
        <p>Что изменилось в этой версии макета:</p>
        <ol>
          <li>
            <code>main</code> и <code>sidebar</code> поменяны местами через{' '}
            <code>grid-template-areas</code>.
          </li>
          <li>
            Добавлена третья колонка 200px — пустая область (<code>.</code>)
            справа.
          </li>
          <li>На мобильном экране сетка схлопывается в одну колонку.</li>
        </ol>
      </MainContent>
      <Footer year={new Date().getFullYear()} />
    </Layout>
  )
}

export default App
