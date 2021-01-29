import { Box } from "@material-ui/core"
import React from "react"

interface Props {
    store: "google" | "amazon"
}

export default function AppStoreBadge(props: Props) {
    switch (props.store) {
        case "google":
            return <Box>
                <a href='https://play.google.com/store/apps/details?id=com.oceanlife&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img alt='Get it on Google Play' 
                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' height="100px"/>
                </a>
            </Box>
        case "amazon":
            return <Box style={{marginLeft: 15}}>
                <a href='http://www.amazon.com/gp/mas/dl/android?p=com.oceanlife'>
                    <img alt='Available At Amazon App Store'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/devportal2/res/images/amazon-appstore-badge-english-black.png' height="70px"/>
                </a>
            </Box>
    }
}