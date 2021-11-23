import React from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Colors } from "style";
import { Icon, Text } from "components";
import navigationOptions from "./JobDetailScreen.navigationOptions";
import styles from "./JobDetailScreen.styles";

const JobDetailScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const post = route.params?.post;

  // const img_uri = post.img_uri;
  // const title = post.title;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigator.goBack()} >
            <Ionicons name="chevron-back-outline" size={18} color={Colors.blackGrey} style={{lineHeight:32}} />
          </TouchableOpacity>
          <Text.Header style={styles.headerTitle}>
            {"Detail Job"}
          </Text.Header>
        </View>
        <View style={styles.mainContainer}>
          <Text.Primary style={styles.jobTitle}>{"Manager, Music publishing Partnership, Youtube"}</Text.Primary>
          <View style={styles.location}>
            <Icon name={"Google"} fill="none" width="40" height="40"/>
            <View style={styles.locationGroup}>
              <Text.Primary style={styles.location1}>{"Google USA"}</Text.Primary>
              <Text.Primary style={styles.location2}>{"USA, California"}</Text.Primary>
            </View>
            <Text.Primary style={styles.jobType}>{"Full - Time"}</Text.Primary>
          </View>
          <View style={styles.skills}>
            <Text.Primary style={styles.skill}>Marketing</Text.Primary>
            <Text.Primary style={styles.skill}>Sales strategy</Text.Primary>
          </View>
          <View style={styles.otherInfos}>
            <View style={styles.experienceGroup}>
              <View style={styles.brainBorder}><Icon  name={"Calendar1"} fill="none" width="14" height="15" /></View>
              <View style={styles.experienceTextGroup}>
                <Text.Primary style={styles.experienceTitle}>{"Deadline level"}</Text.Primary>
                <Text.Primary style={styles.experience}>{"16 Oct 2021"}</Text.Primary>
              </View>
            </View>
            <View style={styles.experienceGroup}>
              <View style={styles.brainBorder}><Icon  name={"Calendar1"} fill="none" width="14" height="15" /></View>
              <View style={styles.experienceTextGroup}>
                <Text.Primary style={styles.experienceTitle}>{"Deadline level"}</Text.Primary>
                <Text.Primary style={styles.experience}>{"16 Oct 2021"}</Text.Primary>
              </View>
            </View>
            <View style={styles.experienceGroup}>
              <View style={styles.brainBorder}><Icon name={"Brain1"} fill="none" width="14" height="15"  /></View>
              <View style={styles.experienceTextGroup}>
                <Text.Primary style={styles.experienceTitle}>{"Experience level"}</Text.Primary>
                <Text.Primary style={styles.experience}>{"Manager"}</Text.Primary>
              </View>
            </View>
            <View style={styles.experienceGroup}>
              <View style={styles.brainBorder}><Icon name={"Brain1"} fill="none" width="14" height="15"  /></View>
              <View style={styles.experienceTextGroup}>
                <Text.Primary style={styles.experienceTitle}>{"Experience level"}</Text.Primary>
                <Text.Primary style={styles.experience}>{"Manager"}</Text.Primary>
              </View>
            </View>
          </View>
          <View>
            <Text.Primary style={styles.jobDescHeader}>{"Minimun qualifications"}</Text.Primary>
            <Text.Primary style={styles.jobDescContent}>{"Bachelor's degree in Law or Business Administration, or equivalent practical experience.\n\n10 years of relevant business experience in music and/or licensing music rights for digital music, broadcast, or internet businesses.\n\nExperience negotiating and managing strategic partnerships for music copyrights.\n\nAbility to speak and write in Spanish and English fluently."}</Text.Primary>
            <Text.Primary style={styles.jobDescHeader}>{"Preferred qualifications"}</Text.Primary>
            <Text.Primary>{"MBA and/or JD degree.\n\nExperience negotiating complex music agreements.\n\nExperience with spreadsheet analysis, data management, and YouTube’s Content Management System.\n\nAbility to think strategically and convert complex issues into straightforward, timely action and thrive in a fast-paced, fluid, and collaborative environment.\n\nA fluency with, or willingness to learn, technological concepts, financial models, and product features.\n\nAbility to speak and write in Portuguese."}</Text.Primary>
          </View>
          <TouchableOpacity style={styles.applyBtn} onPress={() => navigator.openApplyJob()}>
            <Text.Primary style={styles.applyBtnText}>{"Apply to this job"}</Text.Primary>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

JobDetailScreen.navigationOptions = navigationOptions();

export default JobDetailScreen;
