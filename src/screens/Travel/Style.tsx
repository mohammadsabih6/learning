import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  headerView: {
    width: 360,
    marginLeft: 30,
    marginBottom: 10,
  },
  headerText: {
    fontWeight: "900",
    fontSize: 28,
    textAlign: "left",
    fontStyle: "normal",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
  },
  mainView:{
    flexDirection: 'row', flexWrap: 'wrap', marginTop: 80, justifyContent: 'space-around' 
  },
  Font:{
    position: 'absolute', top: 50, left: 20
  },
  Btn:{
    width: '88%', alignSelf: 'center', marginTop: 50, height: 60, backgroundColor: '#FF007F4D', borderRadius: 10
  },
  BtnLable:{
    fontSize: 25, marginTop: 20, height: 100 
  }
});
