import styled from 'styled-components'

const StRecommended = styled.section`
margin-top: 2.4rem;

p{
  font-size: 2rem;
  margin:2.4rem 0;
  padding:0 1.6rem;
}

h2 {
  font-size: 2rem;
  margin:2.4rem 0;
  padding:0 1.6rem;
}

.cont {
  display: flex;
  padding:0 1.6rem;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-around;
  gap:1.4rem;
}

.img {
  position: relative;
  height: 11rem;
  width:16.4rem;
  margin-bottom:6rem;
}

.info {
  position: absolute;
  bottom: -5rem;
}

.stats {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
}

.stat {
  font-size: 12px;
  font-weight: 300;
}

.title {
  font-size: 16px;
}

.img button{
  position:absolute;
  top:1rem;
  right:1rem;
  background:#10141e96;
  border-radius: 50%;
  width:3.2rem;
  height:3.2rem;
}
`

export default StRecommended