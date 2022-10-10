import React from 'react'
import axios from 'axios'
import { Card } from 'antd'
import { Col, Row } from 'antd'
import './style.css'

export default class AnimeList extends React.Component {
  state = {
    animes: [],
    listanime: [],
  }

  componentDidMount() {
    axios.get(`https://api.jikan.moe/v4/anime`).then((res) => {
      const animes = res.data
      this.setState({ animes })
      console.log('Data', animes)
      const listanime = animes.data
      this.setState({ listanime })
      console.log('ListAnime', listanime)
    })
  }

  render() {
    return (
      <Row>
        {this.state.listanime.map((anime) => (
          <Row gutter={16}>
            <Col span={6}>
              <Col span={6} className="card">
                <Card
                  bordered={false}
                  style={{
                    width: 300,
                  }}
                  cover={<img alt="example" src={anime.images.jpg.image_url} />}
                  title={anime.title_english ? anime.title_english : anime.title}
                >
                  {/* <p>Test123</p> */}
                  <p>{anime.episodes ? anime.episodes : '1'} ตอน</p>
                  <p>สถานะ : {anime.status}</p>
                </Card>
              </Col>
            </Col>
          </Row>
        ))}
      </Row>
    )
  }
}
