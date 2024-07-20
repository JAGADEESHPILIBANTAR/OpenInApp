import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './style';

const Home = () => {
  const [selectedButton, setSelectedButton] = useState('topLinks');

  const handlePress = button => {
    setSelectedButton(button);
  };

  const searchList = [
    {
      id: 1,
      image: require('../../../assets/cursor.png'),
      header: '123',
      text: 'Today’s clicks',
    },
    {
      id: 2,
      image: require('../../../assets/location.png'),
      header: 'Ahamedab',
      text: 'Top Location',
    },
    {
      id: 3,
      image: require('../../../assets/globe.png'),
      header: 'Instagram',
      text: 'Top source',
    },
  ];

  const data = [
    {
      id: '1',
      name: 'Sample link name...',
      date: '22 Aug 2022',
      clicks: 2323,
      url: 'https://samplelink.oia.bio/ashd...',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      id: '2',
      name: 'Sample link name...',
      date: '22 Aug 2022',
      clicks: 2323,
      url: 'https://samplelink.oia.bio/ashd...',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      id: '3',
      name: 'Sample link name...',
      date: '22 Aug 2022',
      clicks: 2323,
      url: 'https://samplelink.oia.bio/ashd...',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      id: '4',
      name: 'Sample link name...',
      date: '22 Aug 2022',
      clicks: 2323,
      url: 'https://samplelink.oia.bio/ashd...',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5}>
      <View style={[styles.itemHeader, {padding: 15}]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../assets/amazon.png')}
            style={styles.icon}
          />
          <View>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.clicksContainer}>
          <Text style={styles.clicks}>{item.clicks}</Text>
          <Text style={styles.clicksLabel}>Clicks</Text>
        </View>
      </View>
      <View style={styles.urlContainer}>
        <Text style={styles.url}>{item.url}</Text>
        <TouchableOpacity style={styles.copyButton}>
          <Image
            style={styles.copyIcon}
            source={require('../../../assets/Files.png')}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderMediaImage = ({item}) => {
    return (
      <TouchableOpacity style={styles.list} activeOpacity={0.7}>
        <Image style={styles.logo} source={item.image} />
        <Text style={styles.subheader}>{item.header}</Text>
        <Text style={[styles.weather, {lineHeight: 20}]}>{item.text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#0E6FFF" barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.Text}>Dashboard</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              style={styles.Image}
              source={require('../../../assets/settings.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.firstContainer}>
            <Text style={styles.wish}>Good Morning</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: 10,
              }}>
              <Text style={styles.name}>Ajay Manva</Text>
              <Image
                style={styles.wave}
                source={require('../../../assets/wave.png')}></Image>
            </View>
          </View>
          <View style={styles.graph}>
            <View style={styles.subhead}>
              <Text style={styles.weather}>Overview</Text>
              <View style={styles.box}>
                <Text>22 Aug - 23 Sept</Text>
                <Image
                  style={styles.time}
                  source={require('../../../assets/Time.png')}
                />
              </View>
            </View>
            <Image
              style={styles.chart}
              resizeMode="contain"
              source={require('../../../assets/Chart.png')}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              top: 20,
              // height: 150,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={searchList}
              showsVerticalScrollIndicator={false}
              renderItem={renderMediaImage}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{width: 15}} />}
            />
          </View>
          <TouchableOpacity style={styles.analytics} activeOpacity={0.7}>
            <Image
              style={styles.arrow}
              source={require('../../../assets/Arrow.png')}
            />
            <Text style={styles.text2}>View Analytics</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 20,
              }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedButton === 'topLinks' && styles.selectedButton,
                ]}
                onPress={() => handlePress('topLinks')}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedButton === 'topLinks' && styles.selectedButtonText,
                  ]}>
                  Top Links
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedButton === 'recentLinks' && styles.selectedButton,
                ]}
                onPress={() => handlePress('recentLinks')}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedButton === 'recentLinks' &&
                      styles.selectedButtonText,
                  ]}>
                  Recent Links
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <Image
                style={styles.searchIcon}
                source={require('../../../assets/search.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            {selectedButton === 'topLinks' ? (
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            ) : (
              <View style={styles.noLinksContainer}>
                <Text style={styles.noLinksText}>
                  There are no recent links
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity style={styles.link} activeOpacity={0.6}>
            <Image
              style={styles.arrow}
              source={require('../../../assets/Link.png')}
            />
            <Text style={styles.text2}>View all Links</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.whatsapp} activeOpacity={0.6}>
            <Image
              style={styles.arrow}
              source={require('../../../assets/whatsapp.png')}
            />
            <Text style={styles.text2}>Talk with us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.questions} activeOpacity={0.6}>
            <Image
              style={styles.arrow}
              source={require('../../../assets/questionMark.png')}
            />
            <Text style={styles.text2}>Frequently Asked Questions</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
