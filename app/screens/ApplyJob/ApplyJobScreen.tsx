import React from "react";
import { ScrollView, View, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { navigate } from "navigation";
import { NavStatelessComponent } from "interfaces";
import { Text } from "components";
import { Colors, Font } from "style";

import imagesPath from "../../constant/imagePath";
import navigationOptions from "./ApplyJobScreen.navigationOptions";
import styles from "./ApplyJobScreen.styles";

const ApplyJobScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const route = useRoute();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={18}
              color={Colors.blackGrey}
              style={{ lineHeight: 32 }}
            />
          </TouchableOpacity>
          <Text.Header style={styles.headerTitle}>{"Apply to this job"}</Text.Header>
        </View>
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadBtn}>
            <Feather name="upload-cloud" color={Colors.white} size={17} style={styles.uploadIcon} />
          </TouchableOpacity>
          <View style={styles.uploadTextContainer}>
            <Text.Secondary style={styles.uploadText}>{"Upload your resume"}</Text.Secondary>
          </View>
        </View>
        <Text.Primary style={styles.inputHeader}>{"Full name"}</Text.Primary>
        <TextInput
          style={[
            styles.input,
            { paddingLeft: 24, color: Colors.blackGrey, fontSize: Font.FontSize.Primary - 1 },
          ]}
          placeholder={"Enter the full name"}
        />
        <Text.Primary style={styles.inputHeader}>{"Message"}</Text.Primary>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder={"Message to recruiter.."}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.applyBtn}>
          <Text.Primary style={styles.applyBtnText}>{"Submit Application"}</Text.Primary>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

ApplyJobScreen.navigationOptions = navigationOptions();

export default ApplyJobScreen;
