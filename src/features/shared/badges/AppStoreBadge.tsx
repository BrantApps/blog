import { Box } from "@material-ui/core"
import React from "react"

interface Props {
    store: "google" | "amazon" | "huawei"
}

export default function AppStoreBadge(props: Props) {
    switch (props.store) {
        case "google":
            return <Box>
                <a href='https://play.google.com/store/apps/details?id=com.oceanlife&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img alt='Get it on Google Play' 
                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                </a>
            </Box>
        case "amazon":
            return <Box>
                <a href='http://www.amazon.com/gp/mas/dl/android?p=com.oceanlife'>
                    <img alt='Available At Amazon App Store' 
                    src='https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/devportal2/res/images/amazon-appstore-badge-english-black.png'/>
                </a>
            </Box>
        case "huawei":
            return <Box>
                <a href='https://appgallery.cloud.huawei.com/ag/n/app/C103676293?channelId=blog&referrer=whats-new&id=be3e8b8127a04e8db9fa8c11ad9b6dbc&s=CF0C6B791C0646A87E52A7F1AB2D33C7B5EECD30D369FE901D8AA79E9FE68780&detailType=0&v='>
                    <img alt='Explore it on App Gallery' 
                    src='https://developer.huawei.com/consumer/cn/service/josp/csp/activity/images/stamp/en_US/ic_logo.png'/>
                </a>
            </Box>
    }
}