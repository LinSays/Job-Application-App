import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "components";
import React from "react";
import {  View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SvgIcon from "react-native-svg-icon";
import { Colors } from "style";


import styles from "./JobItem.styles";
import svgs from "../../../assets/svgs";

interface Props {
  location_country: string;
  location_region: string;
  jobType: string;
  jobTitle: string;
  expLvl: string;
  deadlineLvl: string;
  onPress : () => void;
}

const JobItem: React.FC<Props> = ({ location_country, location_region, jobType, jobTitle, expLvl, deadlineLvl,onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <SvgIcon name={"Google"} svgs={svgs} />
        <View style={styles.locationGroup}>
          <Text style={styles.location1}>{location_country}</Text>
          <Text style={styles.location2}>{location_region}</Text>
        </View>
        <Text style={styles.jobType}>{jobType}</Text>
      </View>
      <View style={styles.skills}>
        <Text style={styles.skill}>Marketing</Text>
        <Text style={styles.skill}>Sales strategy</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title} >{jobTitle}</Text>
      </TouchableOpacity>
      
      <View style={styles.otherInfos}>
        <View style={styles.experienceGroup}>
          <View style={styles.brainBorder}><SvgIcon name={"Brain"} fill="none" width="14" height="15" svgs={svgs} /></View>
          <View style={styles.experienceTextGroup}>
            <Text style={styles.experienceTitle}>{"Experience level"}</Text>
            <Text style={styles.experience}>{expLvl}</Text>
          </View>
        </View>
        <View style={styles.experienceGroup}>
          <View style={styles.brainBorder}><SvgIcon  name={"Calendar"} fill="none" width="14" height="15"svgs={svgs} /></View>
          <View style={styles.experienceTextGroup}>
            <Text style={styles.experienceTitle}>{"Deadline level"}</Text>
            <Text style={styles.experience}>{deadlineLvl}</Text>
          </View>
        </View>
      </View>
      <View style={styles.share_container}>
        <TouchableOpacity style={{display:"flex",flexDirection:"row",}}>
          <MaterialCommunityIcons name="heart" size={20} color="#ED5466" style={styles.heart_icon} />
          <Ionicons name="md-share-social-outline" size={16} color={Colors.grey} style={{marginRight:11,textAlignVertical:"center"}} />
          <Text style={styles.share}>{"Share"}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default JobItem;
