/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useMemo, useState } from 'react'
import styles from './styles'
import Web3Status from '../Web3Status';
import IntroPage from './IntroPage';
import MissionSection from './MissionSection';
import CharacterStatus from './CharacterStatus';
import images from '../../images';
import { LevelInfo } from '../../constants/challenge';
import { useWeb3React } from '@web3-react/core';
import { shortenAddress } from '../../utils';
import useProjectGalaxyCampaignsInfo from '../../hooks/useProjectGalaxyCampaignsInfo';
import { MissionStatusOptions, OAT_INFO, PriorityOptions } from '../../constants/challenge';

const Challenge = () => {
  const [isShowMissionPage, setIsShowMissionPage] = useState<boolean>(true)
  const { account } = useWeb3React();
  const campaignsInfo = useProjectGalaxyCampaignsInfo()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const isIntroPageDisabled = urlParams.get('isIntroPageDisabled')
    setIsShowMissionPage(!!isIntroPageDisabled)
  }, [])

  // const userLevel = useMemo(() => {
  //   let userLevel = 1
  //   let isBreak = false
  //   const levelList = Object.keys(LevelInfo).map((level) => LevelInfo[level].missionList)
  //   for (let i = 0; i < levelList.length; i++) {
  //     for (let z = 0; z < levelList[i].length; z++) {
  //       const id = levelList[i][z]
  //       if (
  //         campaignsInfo &&
  //         OAT_INFO[id]?.priority === PriorityOptions.REQUIRED && 
  //         campaignsInfo[id]?.status === MissionStatusOptions.UNFINISHED
  //         ) {
  //           userLevel = i + 1
  //           isBreak = true
  //           break
  //       }
  //     }
  //     if (isBreak) break
  //   }
  //   return userLevel
  // }, [campaignsInfo])

  const userLevel = 2

  const completedTaskAmount = useMemo(() => {
    let completedTaskAmount = 0;
    LevelInfo[userLevel].missionList.forEach((id) => { 
      if (
        campaignsInfo?.[id]?.status &&
        (campaignsInfo[id].status === MissionStatusOptions.FINISHED ||
          campaignsInfo[id].status === MissionStatusOptions.COMPLETED)) {
            completedTaskAmount += 1
      }
    })
    return completedTaskAmount
  }, [campaignsInfo])

  const isCampaignsInfoLoaded = useMemo(() => {
    return !!campaignsInfo && Object.keys(campaignsInfo).length > 0
  }, [campaignsInfo])

  // 
  const [isUserLevelUp, setIsUserLevelUp] = useState(false)
  const [isAnimationCanBePlayed, setIsAnimationCanBePlayed] = useState(false)
  // 

  return (
    <div sx={styles.container}>
      <div sx={styles.challengePageWrapper}>
        <div sx={styles.header}>
          <p>Play To Earn</p>
          {/* TODO: remove this */}
          <button onClick={() => setIsUserLevelUp(!isUserLevelUp)}>user level up</button>
          <button onClick={() => setIsAnimationCanBePlayed(true)}>isAnimationCanBePlayed</button>
          <Web3Status />
        </div>
        {isShowMissionPage ? (
          <div>
            <div sx={styles.subTitleWrapper}>
              <span>Explore the new Galaxy of Decentralized Finance to become a DeFi Master! Complete the missions below to level up, collect NFTs, 
                and learn how to make money on DeFi!&nbsp;
              </span>
              <a 
                sx={styles.learnMoreLink} 
                target="_blank" 
                href="https://hakkafinance.medium.com/play-to-earn-with-hakka-finance-a3b3cf50cfb5" 
                rel="noreferrer"
              >
                <span>Read more  </span>
                <img src={images.iconLinkSmallGreen} />
              </a>
            </div>
            <CharacterStatus 
              address={account ? shortenAddress(account) : '-'}
              level={userLevel}
              completedTaskAmount={completedTaskAmount}
              // isLoaded={isCampaignsInfoLoaded}
              isLoaded={true}
              isUserLevelUp={isUserLevelUp}
              isAnimationCanBePlayed={isAnimationCanBePlayed}
            />
            <div sx={styles.missionSectionWrapper}>
              <MissionSection 
                campaignsInfo={campaignsInfo} 
                isCampaignsInfoLoaded={isCampaignsInfoLoaded} 
                userLevel={userLevel} 
              />
            </div>
          </div>
        ) : (
          <IntroPage setIsShowMissionPage={setIsShowMissionPage} />
        )}
      </div>
    </div>
  )
}

export default Challenge