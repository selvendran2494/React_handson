import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img
            style={{ width: "50px", height: " 50px" }}
            src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
            alt="My Logo"
            className="logo-img"
          />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const RestaurantCard = ({ resDatakey }) => {
  const {
    card: {
      card: {
        info: { cloudinaryImageId, name, cuisines, costForTwo, areaName },
      },
    },
  } = resDatakey || {};

  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Delicious Food"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{cuisines.join(",")}</h2>
        <p className="card-price">{costForTwo}</p>
        <p className="card-price">{areaName}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <main className="main">
      <div className="container">
        {restList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resDatakey={restaurant}
          />
        ))}
      </div>
    </main>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

const restList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "25084",
          name: "Samco",
          cloudinaryImageId: "uzwmbljpo7kp0dotooaj",
          locality: "Opp Phoenix Market City",
          areaName: "Velachery",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "South Indian",
            "Tandoor",
            "Chinese",
            "Arabian",
            "Mughlai",
          ],
          avgRating: 4.4,
          parentId: "1235",
          avgRatingString: "4.4",
          totalRatingsString: "44K+",
          promoted: true,
          adTrackingId:
            "cid=22353843~p=8~adgrpid=22353843#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=25084~eid=bea83ea5-0fcf-4835-8b8a-b4ee4f55d4c8~srvts=1734616689254~collid=80477",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 6.1,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-20 00:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                description: "OnlyOnSwiggy",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      description: "OnlyOnSwiggy",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22353843",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=25084&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "31673",
          name: "A2B - Adyar Ananda Bhavan",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/5df924be-2313-4f1d-912b-db88c44e5a5e_31673.jpg",
          locality: "Nanganallur",
          areaName: "6th Main Road",
          costForTwo: "₹300 for two",
          cuisines: ["South Indian", "Sweets", "Chinese"],
          avgRating: 4.5,
          parentId: "22",
          avgRatingString: "4.5",
          totalRatingsString: "55K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "5.5K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=31673&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "395521",
          name: "Khalids Biriyani",
          cloudinaryImageId: "lggwsihmy6kytcrbympi",
          locality: "Keelkattalai",
          areaName: "Keelkattalai",
          costForTwo: "₹350 for two",
          cuisines: ["Biryani"],
          avgRating: 4,
          parentId: "11840",
          avgRatingString: "4.0",
          totalRatingsString: "8.5K+",
          promoted: true,
          adTrackingId:
            "cid=22860741~p=9~adgrpid=22860741#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=395521~eid=c7ad319b-c71e-4a3a-bc39-03ddfd255570~srvts=1734616689254~collid=80477",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "772",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22860741",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=395521&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "984268",
          name: "Kolkatta Chappathies",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/1/71b95ad6-d19a-4a8b-8fa5-3788af0c5a83_984268.jpg",
          locality: "Madipakkam",
          areaName: " KRISHNASAMY STREET",
          costForTwo: "₹200 for two",
          cuisines: ["Chinese"],
          avgRating: 4.1,
          veg: true,
          parentId: "120065",
          avgRatingString: "4.1",
          totalRatingsString: "20",
          sla: {
            deliveryTime: 11,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=984268&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "28879",
          name: "Sea Emperor",
          cloudinaryImageId: "g5ibrtiekoysrtivyooy",
          locality: "Velachery Main Road",
          areaName: "Madipakkam",
          costForTwo: "₹350 for two",
          cuisines: ["Barbecue", "Biryani", "Arabian", "Tandoor"],
          avgRating: 4.3,
          parentId: "6772",
          avgRatingString: "4.3",
          totalRatingsString: "78K+",
          promoted: true,
          adTrackingId:
            "cid=22733521~p=10~adgrpid=22733521#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=28879~eid=5ffce2d5-178a-4f76-9141-33f3ce56e1c5~srvts=1734616689254~collid=80477",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22733521",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=28879&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "211688",
          name: "Hotel Vasantham",
          cloudinaryImageId: "h1u9ob42j1hqnbhxktwx",
          locality: "Madipakkam",
          areaName: "Nanganallur",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani", "Chinese", "Desserts", "South Indian"],
          avgRating: 4.6,
          parentId: "12526",
          avgRatingString: "4.6",
          totalRatingsString: "2.4K+",
          sla: {
            deliveryTime: 17,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=211688&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "14655",
          name: "Hotel Saravana Bhavan",
          cloudinaryImageId: "xntey9nuqlnqxcv0pfkc",
          locality: "Madipakkam",
          areaName: "Pazhavanthangal",
          costForTwo: "₹300 for two",
          cuisines: ["South Indian", "North Indian", "Sweets"],
          avgRating: 4.3,
          veg: true,
          parentId: "101987",
          avgRatingString: "4.3",
          totalRatingsString: "36K+",
          promoted: true,
          adTrackingId:
            "cid=22352814~p=11~adgrpid=22352814#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=14655~eid=b229fa3e-c043-4c1b-b8d0-ad0f4a865353~srvts=1734616689254~collid=80477",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22352814",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=14655&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "15946",
          name: "Hot Chappathies",
          cloudinaryImageId: "i3d6gxlanwdxpb1qci2y",
          locality: "6th Main Road",
          areaName: "Nanganallur",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Biryani", "Chaat", "Indian", "Tandoor"],
          avgRating: 4.5,
          veg: true,
          parentId: "6972",
          avgRatingString: "4.5",
          totalRatingsString: "40K+",
          sla: {
            deliveryTime: 13,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                    },
                  },
                ],
              },
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "UPTO ₹45",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=15946&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "9345",
          name: "Palmshore",
          cloudinaryImageId: "9ae730c95d13d6e26bf0bc9d69119a38",
          locality: "Ashok Nagar",
          areaName: "KK Nagar",
          costForTwo: "₹600 for two",
          cuisines: [
            "North Indian",
            "Chinese",
            "Biryani",
            "Arabian",
            "Mughlai",
            "South Indian",
            "Seafood",
          ],
          avgRating: 4.4,
          parentId: "1689",
          avgRatingString: "4.4",
          totalRatingsString: "25K+",
          promoted: true,
          adTrackingId:
            "cid=22788982~p=12~adgrpid=22788982#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=9345~eid=987d7f71-0d5f-4b12-9b20-1d126e4112a0~srvts=1734616689254~collid=80477",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:20:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Coastal.png",
                description: "Delivery!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Mughlai.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Coastal.png",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Mughlai.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "ABOVE ₹3000",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "21K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22788982",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=9345&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "721613",
          name: "Sri Annapoorna",
          cloudinaryImageId: "a4c0e5f999c98b75af6ea8a8785bf1e1",
          locality: "Porur",
          areaName: "Nanganallur",
          costForTwo: "₹350 for two",
          cuisines: [
            "North Indian",
            "Chinese",
            "Biryani",
            "Chaat",
            "Snacks",
            "Tandoor",
          ],
          avgRating: 4.1,
          veg: true,
          parentId: "17859",
          avgRatingString: "4.1",
          totalRatingsString: "1.0K+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=721613&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "893786",
          name: "Kongu Nattu Kari Virundhu",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/726f54d4-cb51-474d-909a-712e4348fd9f_893786.JPG",
          locality: " Kora Food Street",
          areaName: "Velachery",
          costForTwo: "₹600 for two",
          cuisines: ["South Indian"],
          avgRating: 4.1,
          parentId: "521525",
          avgRatingString: "4.1",
          totalRatingsString: "143",
          promoted: true,
          adTrackingId:
            "cid=22840744~p=15~adgrpid=22840744#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=893786~eid=ff4919a4-9f53-4271-bbc2-813067f3ed11~srvts=1734616689254~collid=80477",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 4.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22840744",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=893786&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "19493",
          name: "Alif Biriyani - Malaysian Parota",
          cloudinaryImageId: "trdhlswbacnviukh2ocz",
          locality: "Puzhidivakkam",
          areaName: "Madipakkam",
          costForTwo: "₹400 for two",
          cuisines: ["Indian", "Chinese", "Grill", "Tandoor", "Kebabs"],
          avgRating: 4.3,
          parentId: "471666",
          avgRatingString: "4.3",
          totalRatingsString: "20K+",
          sla: {
            deliveryTime: 17,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-19 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=19493&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "881854",
          name: "Ranadeera",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/29a63a27-3a8f-4f4a-9130-3f365a75a7fa_881854.jpg",
          locality: "Subramaniam Colony",
          areaName: "Velachery",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian", "Snacks"],
          avgRating: 4.5,
          parentId: "517098",
          avgRatingString: "4.5",
          totalRatingsString: "110",
          promoted: true,
          adTrackingId:
            "cid=22710269~p=18~adgrpid=22710269#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=881854~eid=3707770f-2bf2-4bf3-9324-671419053de8~srvts=1734616689254~collid=80477",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 4.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-20 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22710269",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=881854&source=collection&query=PAROTTA",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
];
