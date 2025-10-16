import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import advogadasData from './assets/advogadas.json'

// Imagens
import catiaImg from './assets/advogadas/catia.jpg'
import katiaImg from './assets/advogadas/katia.jpg'
import rayanaImg from './assets/advogadas/rayana.jpg'
import rafaellaImg from './assets/advogadas/rafaella.jpg'
import carollinaImg from './assets/advogadas/carollina.jpg'
import eloisaImg from './assets/advogadas/eloisa.jpg'

interface Advogada {
  nome: string
  oab: string
  descricao: string
  area_atuacao: string[]
  foto: string
}

function CorpoJuridico() {
  const [advogadaSelecionada, setAdvogadaSelecionada] = useState<Advogada | null>(null)

  // Mapeamento das fotos
  const fotosMap: { [key: string]: string } = {
    "Dra. Catia Graciele Gonçalves Ferrari": catiaImg,
    "Dra. Katia Cleia Rieger Biazus": katiaImg,
    "Dra. Rayana Monique Freitas": rayanaImg,
    "Dra. Rafaella Borges Lucas": rafaellaImg,
    "Dra. Carollina Aparecida Alves Marcon": carollinaImg,
    "Dra. Eloisa Aline Primon": eloisaImg
  }

  // Converter o objeto JSON para array
  const advogadas: Advogada[] = Object.entries(advogadasData).map(([nome, dados]) => ({
    nome,
    oab: dados.oab,
    descricao: dados.descricao,
    area_atuacao: dados.area_atuacao,
    foto: fotosMap[nome]
  }))

  // Função para truncar texto
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <div className="corpo-juridico-page">
      {/* Navbar */}
      <nav className="navbar navbar-scrolled">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">⚖</span>
            <div className="logo-text">
              <span className="logo-main">F&R</span>
              <span className="logo-sub">Advogados</span>
            </div>
          </Link>
          <div className="navbar-menu">
            <Link to="/#about" className="nav-link">Sobre</Link>
            <Link to="/#office" className="nav-link">Escritório</Link>
            <Link to="/#areas" className="nav-link">Áreas</Link>
            <Link to="/#contact" className="nav-link nav-link-cta">Contato</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="corpo-juridico-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar
          </Link>
          <div className="section-header">
            <span className="section-label">Nossa Equipe</span>
            <h1 className="section-title">Conheça Nosso Corpo Jurídico</h1>
            <p className="corpo-juridico-intro">
              Nossa equipe é composta por 6 advogadas altamente qualificadas e especializadas nas mais diversas áreas do Direito, dedicadas a oferecer soluções jurídicas de excelência com compromisso, ética e determinação.
            </p>
          </div>
        </div>
      </section>

      {/* Advogadas Grid */}
      <section className="advogadas-section">
        <div className="container">
          <div className="advogadas-grid">
            {advogadas.map((advogada, index) => (
              <div
                key={index}
                className="advogada-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setAdvogadaSelecionada(advogada)}
              >
                <div className="advogada-avatar-large">
                  <img src={advogada.foto} alt={advogada.nome} />
                </div>
                <div className="advogada-info">
                  <h3 className="advogada-nome">{advogada.nome}</h3>
                  <p className="advogada-oab">{advogada.oab}</p>
                  <div className="advogada-divider"></div>
                  <div className="advogada-areas">
                    {advogada.area_atuacao.map((area, i) => (
                      <span key={i} className="area-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {area}
                      </span>
                    ))}
                  </div>
                  <p className="advogada-bio">{truncateText(advogada.descricao, 150)}</p>
                  <button className="btn-ler-mais">
                    Ler mais
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="corpo-juridico-cta">
            <h3>Pronto para conversar com nossa equipe?</h3>
            <p>Entre em contato conosco e descubra como podemos ajudar você.</p>
            <Link to="/#contact" className="btn-primary">
              Entre em Contato
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {advogadaSelecionada && (
        <div className="modal-overlay" onClick={() => setAdvogadaSelecionada(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setAdvogadaSelecionada(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="modal-header">
              <div className="modal-avatar">
                <img src={advogadaSelecionada.foto} alt={advogadaSelecionada.nome} />
              </div>
              <div>
                <h2>{advogadaSelecionada.nome}</h2>
                <p className="modal-oab">{advogadaSelecionada.oab}</p>
              </div>
            </div>
            <div className="modal-body">
              <h3>Áreas de Atuação</h3>
              <div className="modal-areas">
                {advogadaSelecionada.area_atuacao.map((area, i) => (
                  <span key={i} className="area-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {area}
                  </span>
                ))}
              </div>
              <h3>Sobre</h3>
              <p className="modal-description">{advogadaSelecionada.descricao}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>FERRARI & RIEGER<br/>ADVOGADOS</h3>
              <p>Determinação em alcançar resultados</p>
            </div>
            <div className="footer-social">
              <h4>Conecte-se Conosco</h4>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/ferraririegeradvogados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/ferraririegeradv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ferrari & Rieger Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <a href="#" className="scroll-to-top" aria-label="Voltar ao topo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}

export default CorpoJuridico
