import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import advogadasData from './assets/advogadas.json'

// Imagens
import logo from './assets/logo.png'
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
            <img src={logo} alt="Ferrari & Rieger Advogados" className="logo-image" />
          </Link>
          <div className="navbar-menu">
            <Link to="/#about" className="nav-link">Sobre</Link>
            <Link to="/#office" className="nav-link">Escritório</Link>
            <Link to="/#areas" className="nav-link">Áreas</Link>
            <Link to="/corpo-juridico" className="nav-link">Corpo Jurídico</Link>
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
          <div className="corpo-juridico-instagram-cta">
            <a href="https://www.instagram.com/ferraririegeradv/" target="_blank" rel="noopener noreferrer" className="instagram-btn-elegant">
              <div className="instagram-btn-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div className="instagram-btn-text">
                  <span className="instagram-btn-title">Acompanhe Nossa Equipe</span>
                  <span className="instagram-btn-subtitle">@ferraririegeradv</span>
                </div>
              </div>
              <svg className="instagram-btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

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
              <img src={logo} alt="Ferrari & Rieger Advogados" className="footer-logo" />
              <p>Determinação em alcançar resultados</p>
            </div>

            <div className="footer-info">
              <h4>Cascavel/PR</h4>
              <div className="footer-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
                <p>Rua Paraná, 4330 - Centro<br/>CEP 85812-011</p>
              </div>
              <div className="footer-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" fill="currentColor"/>
                </svg>
                <div>
                  <a href="tel:+554533063090">(45) 3306-3090</a><br/>
                  <a href="tel:+5545999853090">(45) 99985-3090</a>
                </div>
              </div>
            </div>

            <div className="footer-info">
              <h4>Céu Azul/PR</h4>
              <div className="footer-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
                <p>Rua Curitiba, 1716 - Centro<br/>CEP 85840-000</p>
              </div>
              <div className="footer-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" fill="currentColor"/>
                </svg>
                <a href="tel:+554532661974">(45) 3266-1974</a>
              </div>
            </div>

            <div className="footer-social">
              <h4>Contato</h4>
              <div className="footer-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:contato.ferraririeger@gmail.com">contato.ferraririeger@gmail.com</a>
              </div>
              <h4 style={{ marginTop: '1.5rem' }}>Redes Sociais</h4>
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

      {/* WhatsApp Button */}
      <a href="https://wa.me/5545999853090" target="_blank" rel="noopener noreferrer" className="scroll-to-top whatsapp-float" aria-label="Fale conosco no WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}

export default CorpoJuridico
