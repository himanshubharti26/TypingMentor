import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Select from 'react-select'
import { RootState } from 'src/app/store';
import { getStyles, selectThemeConfig } from 'src/features/utils/ReusableElements/ReactSelect/ReactSelect'

function Settings() {
  const theme = useSelector((state:RootState)=>state.themeCustomizer.mix_background_layout);
  let customSyle = getStyles(theme);
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <Select
            styles={customSyle as any}
            theme={selectThemeConfig}
            isLoading={false}
            className="form-control p-0 m-8"
            escapeClearsValue
            isSearchable
            options={[]}
            placeholder="Select Option"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Settings
