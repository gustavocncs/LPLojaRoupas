// ─── SACOLA ────────────────────────────────────────────────────────
let cartCount = 0

function addToCart(btn) {
  cartCount++
  document.getElementById('cartBtn').textContent = `Sacola (${cartCount})`

  const original = btn.textContent
  btn.textContent = '✓ Adicionado!'
  btn.style.borderColor = '#C9A84C'
  btn.style.color = '#C9A84C'

  setTimeout(() => {
    btn.textContent = original
    btn.style.borderColor = ''
    btn.style.color = ''
  }, 1500)
}

// ─── FAVORITAR ─────────────────────────────────────────────────────
document.querySelectorAll('.product-wish').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const isLiked = btn.classList.toggle('liked')
    btn.textContent = isLiked ? '♥' : '♡'
  })
})

// ─── NEWSLETTER ────────────────────────────────────────────────────
function handleNewsletter(e) {
  e.preventDefault()
  const input = e.target.querySelector('input')
  const btn = e.target.querySelector('button')

  btn.textContent = '✓ Inscrito!'
  input.value = ''
  input.placeholder = 'Obrigado! Fique de olho no seu e-mail.'

  setTimeout(() => {
    btn.textContent = 'Assinar'
    input.placeholder = 'Seu melhor e-mail'
  }, 3000)
}

// ─── SCROLL SUAVE ──────────────────────────────────────────────────
function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

// ─── NAV ATIVO NO SCROLL ───────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav')
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = '#2a2a2a'
  } else {
    nav.style.borderBottomColor = '#1e1e1e'
  }
})
