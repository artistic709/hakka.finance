/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Card, Flex } from 'rebass';
import images from '../../../../images';
import styles from './styles';

function CardInfo(props) {
  const cardHeadContent = [
    {
      imageTop: '',
      title: 'Learn More <br/> About HAKKA',
      subContent: 'View wiki',
      click: () => { window.open('https://hakka-finance.gitbook.io/hakka-wiki', '_blank').focus(); },
      imageBot: 'iconLinkNormal',
    },

    {
      imageTop: 'iconToken',
      title: 'What’s <br/> HAKKA Token',
      subContent: 'Check it out',
      click: () => { location.href = '#whatHakka'; },
      imageBot: 'iconScrollDown',
    },
  ];

  const renderCard = () => cardHeadContent.map((item, i) => (
    <a sx={styles.anchor} key={item.title}>
      <Box
        key={item.title}
        flexDirection="column"
        justifyContent="space-between"
        sx={styles.cardContainer}
        onClick={() => { item.click(); }}
      >
        <Flex justifyContent="flex-end">
          <img sx={styles.cardImg} src={images[item.imageTop]} alt="" />
        </Flex>
        <Box>
          <Box sx={styles.cardHeading} mt="3" mb="3" dangerouslySetInnerHTML={{ __html: item.title }} />
          <Flex
            sx={styles.subContent}
            className="sub-content"
            pt="0"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => { item.click(); }}
          >

            <div className="text" sx={styles.subTextGreen}>
              {item.subContent}
            </div>
            <img sx={styles.forwardImg} src={images[item.imageBot]} alt="" />
          </Flex>
        </Box>
      </Box>
    </a>
  ));
  return (
    <Box>
      <Box sx={styles.card_responsive}>
        <Box onClick={() => { location.href = 'products'; }}>
          <Card sx={styles.cardFirstContainer}>
            <Flex justifyContent="flex-end">
              <img sx={styles.cardFirstImg} src={images.iconLight} alt="" />
            </Flex>
            <Box sx={styles.cardFirstHeading} mt="22px" mb="3">
              Roam Around
              <br />
              {' '}
              Hakka Ecosystem
            </Box>
            <Flex
              sx={styles.subContent}
              pt="0"
              className="sub-content"
              justifyContent="space-between"
              alignItems="center"
            >
              <span sx={styles.subText} className="text">Check out unique HAKKA products</span>
              <img sx={styles.forwardImg} src={images.iconForward} alt="" />
            </Flex>
          </Card>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridGap: 3,
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          {renderCard()}
        </Box>
      </Box>
    </Box>
  );
}

export default CardInfo;
