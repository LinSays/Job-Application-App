import * as React from "react";
import { ScrollView, View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from "react-native-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee, faSlidersH, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Ionicons } from "@expo/vector-icons";

import { Text, JobItem, Icon } from "components";
import { t } from "utils";
import { navigate } from "navigation";
import { Categories, NavStatelessComponent } from "interfaces";
import { Colors, Font } from "style";

import styles from "./HomeScreen.styles";
import navigationOptions from "./HomeScreen.navigationOptions";

const HomeScreen: NavStatelessComponent = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const joblist = [
    {
      jobId: "1",
      location_country: "Google USA",
      location_region: "USA, California",
      jobType: "Full - Time",
      jobTitle: "Manager, Music publishing Partnership, Youtube",
      expLvl: "Manager",
      deadlineLvl: "16 Oct 2021",
    },
    {
      jobId: "2",
      location_country: "Google USA",
      location_region: "USA, California",
      jobType: "Full - Time",
      jobTitle: "Manager, Music publishing Partnership, Youtube",
      expLvl: "Manager",
      deadlineLvl: "16 Oct 2021",
    },
    {
      jobId: "3",
      location_country: "Google USA",
      location_region: "USA, California",
      jobType: "Full - Time",
      jobTitle: "Manager, Music publishing Partnership, Youtube",
      expLvl: "Manager",
      deadlineLvl: "16 Oct 2021",
    },
    {
      jobId: "4",
      location_country: "Google USA",
      location_region: "USA, California",
      jobType: "Full - Time",
      jobTitle: "Manager, Music publishing Partnership",
      expLvl: "Manager",
      deadlineLvl: "16 Oct 2021",
    },
  ];
  const jobTypes = ["Full-Time", "Part-Time", "Intern", "Contract / Remote", "Freelance"];

  const [search, setSearch] = React.useState("");

  const filterList = (list) => {
    return list.filter((listItem) =>
      listItem.jobTitle.toLowerCase().includes(search.toLowerCase())
    );
  };

  const [modalVisible, setModalVisible] = React.useState(false);

  const openFilter = () => {
    setModalVisible(true);
  };

  const deviceWidth = Dimensions.get("window").width;

  //categories
  const [categoriesOpen, setCategoriesOpen] = React.useState(false);
  const [category, setCategory] = React.useState(0);
  const [categories, setCategories] = React.useState([
    { label: "All Categories", value: "0" },
    { label: "Marketing", value: "1" },
    { label: "Sales strategy", value: "2" },
  ]);

  //experience
  const [experiencesOpen, setExperiencesOpen] = React.useState(false);
  const [experience, setExperience] = React.useState(null);
  const [experiences, setExperiences] = React.useState([
    { label: "All Experiencs", value: "0" },
    { label: "Marketing", value: "1" },
    { label: "Sales strategy", value: "2" },
  ]);

  //education
  const [educationsOpen, setEducationsOpen] = React.useState(false);
  const [education, setEducation] = React.useState(null);
  const [educations, setEducations] = React.useState([
    { label: "All Educations", value: "0" },
    { label: "Marketing", value: "1" },
    { label: "Sales strategy", value: "2" },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <LinearGradient
        colors={["#F3F9F3", "#FFFFFF"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ marginTop: 56, marginBottom: 24 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Icon fill="none" width="24" height="24" name={"Menu"} />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <View style={styles.headerText}>
            <Text.Header style={{ color: "#666666" }}>{t("HOME_SCREEN_HEADER_NAME1")}</Text.Header>
            <Text.Header>{t("HOME_SCREEN_HEADER_NAME2")}</Text.Header>
          </View>
          <TouchableOpacity style={styles.notification}>
            <Icon name={"Notification_white"} fill={"none"} width={"24"} height={"24"} />
            <View
              style={{
                position: "absolute",
                width: 8,
                height: 8,
                borderRadius: 10,
                backgroundColor: Colors.orange,
                top: 13.5,
                right: 11.5,
              }}
            ></View>
          </TouchableOpacity>
        </View>

        <View style={styles.SearchbarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder={t("SEARCHBAR_PLACEHOLDER")}
            onChangeText={(search) => setSearch(search)}
          />
          <Icon
            fill="none"
            width="18"
            height="18"
            name="Search"
            style={{ position: "absolute", left: 18, top: 15 }}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 18, top: 15 }}
            onPress={() => openFilter()}
          >
            <FontAwesomeIcon icon={faSlidersH} />
          </TouchableOpacity>
        </View>

        <Text.Secondary style={styles.recentPost}>{t("RECENT_JOBS")}</Text.Secondary>
        <View>
          {filterList(joblist).map((listItem, index) => (
            <JobItem
              key={index}
              location_country={listItem.location_country}
              location_region={listItem.location_region}
              jobType={listItem.jobType}
              jobTitle={listItem.jobTitle}
              expLvl={listItem.expLvl}
              deadlineLvl={listItem.deadlineLvl}
              onPress={() => navigator.openJobDetail({ listItem })}
            ></JobItem>
          ))}
        </View>
      </ScrollView>
      <Modal
        isVisible={modalVisible}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        deviceWidth={deviceWidth}
        style={{ width: "100%", marginLeft: 0, marginBottom: 0 }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalTopBar}></View>
          <Text.Primary style={styles.inputHeader}>{t("LOCATION")}</Text.Primary>
          <View style={[styles.SearchbarContainer, { marginTop: 10 }]}>
            <TextInput
              style={[
                styles.searchBar,
                { paddingLeft: 24, color: Colors.blackGrey, fontSize: Font.FontSize.Primary - 1 },
              ]}
              placeholder={t("LOCATION")}
              value={"Berlin, Germany"}
            />
            <Ionicons
              size={20}
              name="location-outline"
              style={{ position: "absolute", right: 18, top: 15 }}
            />
          </View>
          <Text.Primary style={styles.inputHeader}>{t("CATEGORIES")}</Text.Primary>
          <View style={[styles.SearchbarContainer, { marginTop: 10 }]}>
            <DropDownPicker
              open={categoriesOpen}
              value={category}
              items={categories}
              placeholder={"All Categories"}
              setOpen={setCategoriesOpen}
              setValue={setCategory}
              setItems={setCategories}
              style={styles.selectContainer}
              textStyle={styles.selectText}
              disabledStyle={{
                opacity: 0.5,
              }}
              dropDownContainerStyle={{
                borderColor: "#E1E3EA",
              }}
              searchable={true}
              zIndex={9999}
            />
          </View>
          <View style={styles.exp_edu}>
            <View style={styles.exp}>
              <Text.Primary style={styles.inputHeader}>{t("EXPERIENCE")}</Text.Primary>
              <View style={[styles.SearchbarContainer, { marginTop: 10 }]}>
                <DropDownPicker
                  open={experiencesOpen}
                  value={experience}
                  items={experiences}
                  placeholder={"Select"}
                  setOpen={setExperiencesOpen}
                  setValue={setExperience}
                  setItems={setExperiences}
                  style={styles.selectContainer}
                  textStyle={styles.selectText}
                  disabledStyle={{
                    opacity: 0.5,
                  }}
                  dropDownContainerStyle={{
                    borderColor: "#E1E3EA",
                  }}
                  searchable={true}
                />
              </View>
            </View>
            <View style={styles.edu}>
              <Text.Primary style={styles.inputHeader}>{t("EDUCATION")}</Text.Primary>
              <View style={[styles.SearchbarContainer, { marginTop: 10 }]}>
                <DropDownPicker
                  open={educationsOpen}
                  value={education}
                  items={educations}
                  placeholder={"Select"}
                  setOpen={setEducationsOpen}
                  setValue={setEducation}
                  setItems={setEducations}
                  style={styles.selectContainer}
                  textStyle={styles.selectText}
                  disabledStyle={{
                    opacity: 0.5,
                  }}
                  dropDownContainerStyle={{
                    borderColor: "#E1E3EA",
                  }}
                  searchable={true}
                />
              </View>
            </View>
          </View>
          <Text.Primary style={styles.inputHeader}>{t("JOBTYPE")}</Text.Primary>
          <View style={styles.jobTypes}>
            {jobTypes.map((listItem, index) => (
              <Text.Primary key={index} style={styles.jobType}>
                {listItem}
              </Text.Primary>
            ))}
          </View>
          <View style={styles.modalActions}>
            <TouchableOpacity style={styles.clearBtn}>
              <Text.Primary style={styles.clearText}>{t("CLEAR")}</Text.Primary>
            </TouchableOpacity>
            <TouchableOpacity style={styles.showBtn}>
              <Text.Primary style={styles.showText}>{t("SHOWRESULT")}</Text.Primary>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

HomeScreen.navigationOptions = navigationOptions();

export default HomeScreen;
