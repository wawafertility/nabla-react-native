require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = 'nabla-react-native-scheduling'
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = package['author']
  s.homepage     = package['repository']
  s.platform     = :ios, "13.0"

  s.source       = { :git => "https://github.com/wawafertility/nabla-react-native.git", :tag => "v#{s.version}" }
  s.source_files  = "ios/Sources/**/*.{h,m,swift}"

  s.dependency 'React-Core'
  s.dependency 'nabla-react-native-core'
  # s.dependency 'NablaScheduling', '2.0.0'
  s.dependency 'NablaScheduling', :git => 'https://github.com/wawafertility/rn-nabla-ios.git', :tag => "#{s.version}"

  s.test_spec 'Tests' do |test_spec|
    test_spec.source_files= "ios/Tests/**/*.{h,m,swift}"
  end
end
