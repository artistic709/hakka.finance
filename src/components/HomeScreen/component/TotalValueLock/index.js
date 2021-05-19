/** @jsx jsx */
import { jsx } from 'theme-ui'
import React ,{ useState }from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import styles from './styles'
import FlagshipProduct from '../FlagshipProduct'
import images from 'src/images'
import fetch from 'cross-fetch';

function TotalValueLock() {
  const products = [
    {
      title: '3F Mutual',
      image: 'iconMutual',
      link: 'https://3fmutual.com/',
    },
    {
      title: 'Harvester',
      image: 'iconHarvester',
      link: 'https://harvesters.hakka.finance/pools',
    },
    {
      title: 'Hakka Intelligence',
      image: 'iconIntelligence',
      link: 'https://intelligence.hakka.finance/',
    }
  ]

  const renderFlagshipProducts = () => {
    return products.map((item, i) => {
      return <FlagshipProduct key={item.title} item={item} i={i} link={item.link} />
    })
  }

  const [lockedValue, setLockedValue]= useState(0);
  fetch('https://tvl.hakka.finance/').then((res) => {
    return res.text()
  }).then((res) => {
    const value = parseInt(res).toLocaleString()
    setLockedValue(`$${value}`)
  })

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      sx={styles.totalValueContainer}
    >
      <Box>
        <Box sx={styles.totalValueHeadNum}>
          <Box sx={styles.totalValueHead}>TOTAL VALUE LOCKED</Box>

          <Flex sx={styles.totalValueMoney} alignItems="baseline" mt="12px" >
            {/* <Box id='supply'>$165,651,253.10</Box> */}
            <Box id='supply'>{lockedValue}</Box>
            <Box ml="8px" fontSize={[1, 5, 5, 5]}>USD</Box>
          </Flex>
        </Box>

        <Box>
          <Box sx={styles.totalValueSubText} mt="4">Our Flagship Products</Box>
          <Flex sx={styles.listProducts} ml="-20px" >
            {renderFlagshipProducts()}
          </Flex>
        </Box>
      </Box>

      <Box><img sx={styles.totalValueImg} src={images.imageAlienGrey} alt="" /></Box>
    </Flex>
  )
}

export default TotalValueLock
