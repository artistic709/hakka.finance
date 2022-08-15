/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import styles from './styles';
import ProgressBar from '../../Common/ProgressBar';

interface CharacterStatusProps {
  address?: string;
  level?: number;
  characterTitle?: string;
  description?: string;
  totalTaskAmount: number;
  completedTaskAmount: number;
  profileImg?: string;
}

const CharacterStatus = ({ address, level, characterTitle, description, totalTaskAmount, completedTaskAmount, profileImg }: CharacterStatusProps) => {
  return (
    <div sx={styles.container}>
      <div sx={styles.levelContainer}>Level {level}</div>
      <div sx={styles.mainLayout}>
        <div sx={styles.profileImgWrapper}>
          <img src={profileImg} width="200" height="200" />
        </div>
        <div sx={styles.infoSection}>
          <p sx={styles.address}>{address}</p>
          <h4>{characterTitle}</h4>
          <p sx={styles.descriptionSection}>{description}</p>
          <div sx={styles.progressBarContainer}>
            <ProgressBar 
              totalTaskAmount={totalTaskAmount}
              completedTaskAmount={completedTaskAmount}
            />
            <span>Level Up!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterStatus