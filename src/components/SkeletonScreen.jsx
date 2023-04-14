import ContentLoader from 'react-content-loader'

export default function SkeletonScreen() {
  return (
    <ContentLoader 
      speed={2}
      width={900}
      height={300}
      viewBox="0 0 600 600"
      backgroundColor="#333"
      foregroundColor="#555"
    >
      <rect x="0" y="0" rx="3" ry="3" width="50" height="10" />
      <rect x="0" y="25" rx="3" ry="3" width="200" height="20" /> 
      <rect x="0" y="55" rx="3" ry="3" width="720" height="45" /> 
      <rect x="0" y="115" rx="3" ry="3" width="460" height="20" /> 
      <rect x="0" y="150" rx="3" ry="3" width="750" height="45" /> 
      <rect x="0" y="215" rx="3" ry="3" width="470" height="20" /> 
      <rect x="0" y="250" rx="3" ry="3" width="720" height="50" /> 
      <rect x="0" y="270" rx="3" ry="3" width="550" height="20" /> 
      <rect x="0" y="305" rx="3" ry="3" width="750" height="45" /> 
      <rect x="0" y="370" rx="3" ry="3" width="400" height="20" /> 
      <rect x="0" y="405" rx="3" ry="3" width="400" height="50" /> 
      <rect x="100" y="495" rx="3" ry="3" width="200" height="40" /> 
    </ContentLoader>
  )
}