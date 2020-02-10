import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ExportSettings, ExportSettingsProps } from './ExportSettings.component';
import * as generatorSelectors from '../../core/generator/generator.selectors';
import * as generatorActions from '../../core/generator/generator.actions';

const mapStateToProps = (state: any): Partial<ExportSettingsProps> => ({
	numPreviewRows: generatorSelectors.getNumPreviewRows(state),
	showRowNumbers: generatorSelectors.shouldShowRowNumbers(state),
	theme: generatorSelectors.getTheme(state),
	previewTextSize: generatorSelectors.getPreviewTextSize(state),
	showExportSettings: generatorSelectors.shouldShowExportSettings(state),
	exportSettingsPosition: generatorSelectors.getExportSettingsPosition(state)
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<ExportSettingsProps> => ({
	onChangeTheme: (theme: string): any => dispatch(generatorActions.changeTheme(theme)),
	toggleRowNumbers: (): any => dispatch(generatorActions.toggleShowRowNumbers()),
	toggleLineWrapping: (): any => dispatch(generatorActions.toggleLineWrapping()),
	onChangePreviewTextSize: (size: number): any => dispatch(generatorActions.setPreviewTextSize(size)),
	updateNumPreviewRows: (numRows: number): any => dispatch(generatorActions.updateNumPreviewRows(numRows))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps

// @ts-ignore
)(ExportSettings);
