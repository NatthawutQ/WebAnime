import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
import { Col, Row } from 'antd'

const AnimeCard = () => {
  const [anime, setAnime] = useState([
    {
      id: 1,
      name: 'Dragon Ball Z',
      ep: 12,
      description: 'เหล่าโงกุนและผองเพื่อน รวบรวมพลังเพื่อตามหา ลูกแก้วทั้ง10',
      status: 'ยังไม่จบ',
      picture: 'https://img1.ak.crunchyroll.com/i/spire2/ab001b1cb053ec0d7b1b47b0f7bf98e71647329181_full.jpg',
    },
    {
      id: 2,
      name: 'Doramon',
      ep: 12,
      description: 'โดราเอมอน ผู้มีของวิเศษ',
      status: 'ยังไม่จบ',
      picture: 'https://m.media-amazon.com/images/M/MV5BMGIzZmQ4YmUtZGQ4NC00OTkyLWE1MGUtMTQ3N2Y3N2E2NWEyXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      name: 'SAO Sword art Online 1',
      ep: 24,
      description: 'คิริโตะ ชายผู้มีนามว่าเทพ ในโลกของเกมเสมือนจริง',
      status: 'จบแล้ว',
      picture: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg',
    },
    {
      id: 4,
      name: 'Black Clover',
      ep: 146,
      description: 'แอสต้า ผู้ที่เกิดมาพร้อมกับ ไร้พลังเวทมนตร์ แต่กลับครอบรองสมุด6 แฉกซึ่งหมายถึงปีศาจครอบครอง',
      status: 'ยังไม่จบ',
      picture: 'https://m.media-amazon.com/images/M/MV5BN2FlYjYxMTMtZGQzYy00OWU2LTkyYWMtNWJhODhmZmM0N2FhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    },
  ])
  return (
    <Row>
      {anime.map((item) => (
        <Row gutter={16}>
          <Col span={6}>
            <Col span={6} className="card">
              <Card
                bordered={false}
                style={{
                  width: 300,
                }}
                cover={<img alt="example" src={item.picture} />}
                title={item.name}
              >
                <p>{item.description}</p>
                <p>{item.ep} ตอน</p>
                <p>สถานะ : {item.status}</p>
              </Card>
            </Col>
          </Col>
        </Row>
      ))}
    </Row>
  )
}
export default AnimeCard
