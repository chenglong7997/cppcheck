<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="ja_JP">
<context>
    <name>About</name>
    <message>
        <location filename="about.ui" line="14"/>
        <source>About Cppcheck</source>
        <translation>cppcheckについて</translation>
    </message>
    <message>
        <location filename="about.ui" line="64"/>
        <source>Version %1</source>
        <translation>Version %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="71"/>
        <source>Cppcheck - A tool for static C/C++ code analysis.</source>
        <translation>CppcheckはC/C++ 静的コード解析ツールです.</translation>
    </message>
    <message utf8="true">
        <location filename="about.ui" line="81"/>
        <source>Copyright © 2007-2011 Daniel Marjamäki and cppcheck team.</source>
        <oldsource>Copyright © 2007-2010 Daniel Marjamäki and cppcheck team.</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="about.ui" line="91"/>
        <source>This program is licensed under the terms
of the GNU General Public License version 3</source>
        <translation>本ソフトウェアはGNU General Public License Version3 ライセンスの元で配布されます</translation>
    </message>
    <message>
        <location filename="about.ui" line="102"/>
        <source>Visit Cppcheck homepage at %1</source>
        <translation>Cppcheckのホームページはこちら %1</translation>
    </message>
</context>
<context>
    <name>ApplicationDialog</name>
    <message>
        <location filename="application.ui" line="23"/>
        <source>Add an application</source>
        <translation>アプリケーションの追加</translation>
    </message>
    <message>
        <location filename="application.ui" line="41"/>
        <source>Here you can add an application that can open error files. Specify a name for the application, the application executable and command line parameters for the application.

The following texts in parameters are replaced with appropriate values when application is executed:
(file) - Filename containing the error
(line) - Line number containing the error
(message) - Error message
(severity) - Error severity

Example opening a file with Kate and make Kate scroll to the correct line:
Executable: kate
Parameters: -l(line) (file)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="application.ui" line="76"/>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="application.ui" line="86"/>
        <source>&amp;Executable:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="application.ui" line="96"/>
        <source>&amp;Parameters:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="application.ui" line="138"/>
        <source>Browse</source>
        <translation>参照</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="58"/>
        <source>Executable files (*.exe);;All files(*.*)</source>
        <translation>実行ファイル (*.exe);;All files(*.*)</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="61"/>
        <source>Select viewer application</source>
        <translation>表示アプリケーションの選択</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="87"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="88"/>
        <source>You must specify a name, a path and parameters for the application!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FileViewDialog</name>
    <message>
        <location filename="fileviewdialog.cpp" line="43"/>
        <source>Could not find the file: %1</source>
        <translation>ファイル：%1 が見つかりません</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="47"/>
        <location filename="fileviewdialog.cpp" line="62"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="58"/>
        <source>Could not read the file: %1</source>
        <translation>ファイル：%1 が読み込めません</translation>
    </message>
</context>
<context>
    <name>LogView</name>
    <message>
        <location filename="logview.ui" line="17"/>
        <source>Checking Log</source>
        <translation>Cppcheck ログ</translation>
    </message>
    <message>
        <location filename="logview.ui" line="48"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="logview.ui" line="55"/>
        <source>Clear</source>
        <translation>消去</translation>
    </message>
    <message>
        <location filename="logview.ui" line="62"/>
        <source>Close</source>
        <translation>閉じる</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="66"/>
        <source>Save Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="logview.cpp" line="67"/>
        <source>Text files (*.txt *.log);;All files (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="logview.cpp" line="73"/>
        <source>Cppcheck</source>
        <translation type="unfinished">Cppcheck</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="74"/>
        <source>Could not open file for writing: &quot;%1&quot;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="main.ui" line="26"/>
        <location filename="mainwindow.cpp" line="251"/>
        <location filename="mainwindow.cpp" line="310"/>
        <location filename="mainwindow.cpp" line="341"/>
        <location filename="mainwindow.cpp" line="409"/>
        <location filename="mainwindow.cpp" line="436"/>
        <location filename="mainwindow.cpp" line="683"/>
        <location filename="mainwindow.cpp" line="813"/>
        <location filename="mainwindow.cpp" line="834"/>
        <location filename="mainwindow.cpp" line="976"/>
        <location filename="mainwindow.cpp" line="1064"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="main.ui" line="74"/>
        <source>&amp;File</source>
        <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
        <location filename="main.ui" line="89"/>
        <source>&amp;View</source>
        <translation>表示(&amp;V)</translation>
    </message>
    <message>
        <location filename="main.ui" line="93"/>
        <source>&amp;Toolbars</source>
        <translation>ツールバー(&amp;T)</translation>
    </message>
    <message>
        <location filename="main.ui" line="120"/>
        <source>&amp;Help</source>
        <translation>ヘルプ(&amp;H)</translation>
    </message>
    <message>
        <location filename="main.ui" line="130"/>
        <source>&amp;Check</source>
        <translation>解析(&amp;A)</translation>
    </message>
    <message>
        <location filename="main.ui" line="141"/>
        <source>&amp;Edit</source>
        <translation>編集(&amp;E)</translation>
    </message>
    <message>
        <location filename="main.ui" line="154"/>
        <source>Standard</source>
        <translation>標準(&amp;S)</translation>
    </message>
    <message>
        <location filename="main.ui" line="173"/>
        <source>Categories</source>
        <translation>カテゴリ(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="201"/>
        <source>&amp;License...</source>
        <translation>ライセンス(&amp;L)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="206"/>
        <source>A&amp;uthors...</source>
        <translation>作者(&amp;u)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="215"/>
        <source>&amp;About...</source>
        <translation>Cppcheckについて(&amp;A)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="220"/>
        <source>&amp;Files...</source>
        <translation>ファイル選択(&amp;F)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="223"/>
        <location filename="main.ui" line="226"/>
        <source>Check files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="229"/>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="main.ui" line="238"/>
        <source>&amp;Directory...</source>
        <translation>ディレクトリ選択(&amp;D)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="241"/>
        <location filename="main.ui" line="244"/>
        <source>Check directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="247"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <location filename="main.ui" line="256"/>
        <source>&amp;Recheck files</source>
        <translation>再チェック(&amp;R)</translation>
    </message>
    <message>
        <location filename="main.ui" line="259"/>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <location filename="main.ui" line="268"/>
        <source>&amp;Stop</source>
        <translation>停止(&amp;S)</translation>
    </message>
    <message>
        <location filename="main.ui" line="271"/>
        <location filename="main.ui" line="274"/>
        <source>Stop checking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="277"/>
        <source>Esc</source>
        <translation>Esc</translation>
    </message>
    <message>
        <location filename="main.ui" line="286"/>
        <source>&amp;Save results to file...</source>
        <translation>結果をファイルに保存(&amp;S)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="289"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="main.ui" line="294"/>
        <source>&amp;Quit</source>
        <translation>終了(&amp;Q)</translation>
    </message>
    <message>
        <location filename="main.ui" line="303"/>
        <source>&amp;Clear results</source>
        <translation>結果をクリア(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="312"/>
        <source>&amp;Preferences</source>
        <translation>設定(&amp;P)</translation>
    </message>
    <message>
        <location filename="main.ui" line="324"/>
        <source>Style warnings</source>
        <translation>スタイル警告</translation>
    </message>
    <message>
        <location filename="main.ui" line="327"/>
        <location filename="main.ui" line="330"/>
        <source>Show style warnings</source>
        <translation>スタイル警告を表示</translation>
    </message>
    <message>
        <location filename="main.ui" line="342"/>
        <source>Errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="345"/>
        <location filename="main.ui" line="348"/>
        <source>Show errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="514"/>
        <source>Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="517"/>
        <source>Show information messages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="529"/>
        <source>Portability</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="532"/>
        <source>Show portability warnings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="540"/>
        <source>&amp;Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="543"/>
        <source>Filter results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="548"/>
        <source>Project MRU placeholder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="559"/>
        <source>Windows 32-bit ANSI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="567"/>
        <source>Windows 32-bit Unicode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="575"/>
        <source>Unix 32-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="583"/>
        <source>Unix 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="591"/>
        <source>Windows 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="599"/>
        <source>Platforms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="441"/>
        <source>C&amp;lose Project File</source>
        <translation>プロジェクトを閉じる(&amp;l)</translation>
    </message>
    <message>
        <location filename="main.ui" line="449"/>
        <source>&amp;Edit Project File...</source>
        <translation>プロジェクトの編集(&amp;E)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="458"/>
        <source>&amp;Statistics</source>
        <translation>統計情報(&amp;S)</translation>
    </message>
    <message>
        <location filename="main.ui" line="470"/>
        <source>Warnings</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="main.ui" line="473"/>
        <location filename="main.ui" line="476"/>
        <source>Show warnings</source>
        <translation>警告を表示</translation>
    </message>
    <message>
        <location filename="main.ui" line="488"/>
        <source>Performance warnings</source>
        <translation>パフォーマンス警告</translation>
    </message>
    <message>
        <location filename="main.ui" line="491"/>
        <location filename="main.ui" line="494"/>
        <source>Show performance warnings</source>
        <translation>パフォーマンス警告を表示</translation>
    </message>
    <message>
        <location filename="main.ui" line="502"/>
        <source>Show &amp;hidden</source>
        <translation>非表示を表示(&amp;h)</translation>
    </message>
    <message>
        <location filename="main.ui" line="353"/>
        <source>&amp;Check all</source>
        <translation>すべてのエラーを表示(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="190"/>
        <source>Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.ui" line="358"/>
        <source>&amp;Uncheck all</source>
        <translation>すべてのエラーを非表示(&amp;U)</translation>
    </message>
    <message>
        <location filename="main.ui" line="363"/>
        <source>Collapse &amp;all</source>
        <translation>ツリーを折り畳む(&amp;A)</translation>
    </message>
    <message>
        <location filename="main.ui" line="368"/>
        <source>&amp;Expand all</source>
        <translation>ツリーを展開(&amp;E)</translation>
    </message>
    <message>
        <location filename="main.ui" line="376"/>
        <source>&amp;Standard</source>
        <translation>標準(&amp;S)</translation>
    </message>
    <message>
        <location filename="main.ui" line="379"/>
        <source>Standard items</source>
        <translation>標準項目</translation>
    </message>
    <message>
        <location filename="main.ui" line="384"/>
        <source>&amp;Contents</source>
        <translation>コンテンツ(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="387"/>
        <source>Open the help contents</source>
        <translation>ヘルプファイルを開く</translation>
    </message>
    <message>
        <location filename="main.ui" line="390"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="main.ui" line="395"/>
        <source>Toolbar</source>
        <translation>ツールバー</translation>
    </message>
    <message>
        <location filename="main.ui" line="403"/>
        <source>&amp;Categories</source>
        <translation>カテゴリ(&amp;C)</translation>
    </message>
    <message>
        <location filename="main.ui" line="406"/>
        <source>Error categories</source>
        <translation>エラーカテゴリ</translation>
    </message>
    <message>
        <location filename="main.ui" line="411"/>
        <source>&amp;Open XML...</source>
        <translation>XMLを開く(&amp;O)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="420"/>
        <source>Open P&amp;roject File...</source>
        <translation>プロジェクトを開く(&amp;R)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="425"/>
        <source>&amp;New Project File...</source>
        <translation>新規プロジェクト(&amp;N)...</translation>
    </message>
    <message>
        <location filename="main.ui" line="430"/>
        <source>&amp;Log View</source>
        <translation>ログを表示(&amp;L)</translation>
    </message>
    <message>
        <location filename="main.ui" line="433"/>
        <source>Log View</source>
        <translation>ログ表示</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="246"/>
        <source>There was a problem with loading the editor application settings.

This is probably because the settings were changed between the Cppcheck versions. Please check (and fix) the editor application settings, otherwise the editor program might not start correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="311"/>
        <source>No suitable files found to check!</source>
        <translation>解析可能なファイルではありません</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="342"/>
        <source>You must close the project file before selecting new files or directories!</source>
        <translation>新しいファイル／ディレクトリを解析するには現在のプロジェクトを閉じてください</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="357"/>
        <source>Select files to check</source>
        <translation>チェック対象のファイルを選択</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="371"/>
        <source>Select directory to check</source>
        <translation>チェック対象のディレクトリを選択</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="66"/>
        <source>Quick Filter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="410"/>
        <source>Found project file: %1

Do you want to load this project file instead?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="437"/>
        <source>Found project files from the directory.

Do you want to proceed checking without using any of these project files?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="605"/>
        <source>XML files (*.xml)</source>
        <translation>XML ファイル (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="607"/>
        <source>Open the report file</source>
        <translation>レポートを開く</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="679"/>
        <source>Checking is running.

Do you want to stop the checking and exit Cppcheck?.</source>
        <translation type="unfinished">解析中です.

解析を停止してCppcheckを終了しますか？.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="726"/>
        <source>License</source>
        <translation>ライセンス</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="733"/>
        <source>Authors</source>
        <translation>作者</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="741"/>
        <source>XML files version 2 (*.xml);;XML files version 1 (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <oldsource>XML files (*.xml);;Text files (*.txt);;CSV files (*.csv)</oldsource>
        <translation type="unfinished">XML ファイル (*.xml);;テキストファイル (*.txt);;CSV形式ファイル (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="743"/>
        <source>Save the report file</source>
        <translation>レポートを保存</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="751"/>
        <source>XML files version 1 (*.xml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="757"/>
        <source>XML files version 2 (*.xml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="763"/>
        <source>Text files (*.txt)</source>
        <translation>テキストファイル (*.txt)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="769"/>
        <source>CSV files (*.csv)</source>
        <translation>CSV形式ファイル (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="815"/>
        <source>Cppcheck - %1</source>
        <translation>Cppcheck - %1</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="828"/>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="873"/>
        <location filename="mainwindow.cpp" line="940"/>
        <source>Project files (*.cppcheck);;All files(*.*)</source>
        <translation>プロジェクトファイル (*.cppcheck);;All files(*.*)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="875"/>
        <source>Select Project File</source>
        <translation>プロジェクトファイルを選択</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="889"/>
        <location filename="mainwindow.cpp" line="951"/>
        <source>Project:</source>
        <translation type="unfinished">プロジェクト:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="942"/>
        <source>Select Project Filename</source>
        <translation>プロジェクトファイル名を選択</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="977"/>
        <source>No project file loaded</source>
        <translation>プロジェクトファイルが読み込まれていません</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1059"/>
        <source>The project file

%1

 could not be found!

Do you want to remove the file from the recently used projects -list?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="33"/>
        <source>English</source>
        <translation></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="32"/>
        <source>Dutch</source>
        <translation></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="34"/>
        <source>Finnish</source>
        <translation></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="35"/>
        <source>French</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="41"/>
        <source>Spanish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="42"/>
        <source>Swedish</source>
        <translation></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="36"/>
        <source>German</source>
        <translation></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="39"/>
        <source>Russian</source>
        <translation></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="38"/>
        <source>Polish</source>
        <translation></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="37"/>
        <source>Japanese</source>
        <oldsource>Japanease</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="40"/>
        <source>Serbian</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Platforms</name>
    <message>
        <location filename="platforms.cpp" line="37"/>
        <source>Build-in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="38"/>
        <source>Unix 32-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="39"/>
        <source>Unix 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="40"/>
        <source>Windows 32-bit ANSI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="41"/>
        <source>Windows 32-bit Unicode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="42"/>
        <source>Windows 64-bit</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Project</name>
    <message>
        <location filename="project.cpp" line="73"/>
        <location filename="project.cpp" line="119"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="project.cpp" line="74"/>
        <source>Could not read the project file.</source>
        <translation type="unfinished">プロジェクトファイルが読み込めませんでした</translation>
    </message>
    <message>
        <location filename="project.cpp" line="120"/>
        <source>Could not write the project file.</source>
        <translation type="unfinished">プロジェクトファイルが保存できませんでした</translation>
    </message>
</context>
<context>
    <name>ProjectFile</name>
    <message>
        <location filename="projectfile.ui" line="14"/>
        <source>Project File</source>
        <translation>プロジェクトファイル</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="24"/>
        <source>Project</source>
        <translation type="unfinished">プロジェクト</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="51"/>
        <source>Root:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="70"/>
        <location filename="projectfile.ui" line="221"/>
        <source>Paths:</source>
        <translation>パス:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="97"/>
        <location filename="projectfile.ui" line="162"/>
        <location filename="projectfile.ui" line="235"/>
        <source>Add...</source>
        <translation type="unfinished">追加...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="104"/>
        <location filename="projectfile.ui" line="169"/>
        <location filename="projectfile.ui" line="242"/>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="111"/>
        <location filename="projectfile.ui" line="176"/>
        <location filename="projectfile.ui" line="249"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="138"/>
        <source>Includes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="144"/>
        <source>Include directories:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="196"/>
        <source>Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="203"/>
        <source>Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="215"/>
        <source>Exclude</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="34"/>
        <source>Defines:</source>
        <translation>Defines:</translation>
    </message>
</context>
<context>
    <name>ProjectFileDialog</name>
    <message>
        <location filename="projectfiledialog.cpp" line="39"/>
        <source>Project file: %1</source>
        <translation>プロジェクトファイル:%1</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="218"/>
        <source>Select include directory</source>
        <translation>includeディレクトリを選択</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="232"/>
        <source>Select a directory to check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="273"/>
        <source>Select directory to ignore</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="translationhandler.cpp" line="90"/>
        <source>Unknown language specified!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="100"/>
        <source>Language file %1 not found!</source>
        <translation>言語ファイル %1 が見つかりません!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="106"/>
        <source>Failed to load translation for language %1 from file %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ResultsTree</name>
    <message>
        <location filename="resultstree.cpp" line="60"/>
        <location filename="resultstree.cpp" line="1114"/>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="60"/>
        <location filename="resultstree.cpp" line="1114"/>
        <source>Severity</source>
        <translation>警告種別</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="60"/>
        <location filename="resultstree.cpp" line="1114"/>
        <source>Line</source>
        <translation>行</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="60"/>
        <location filename="resultstree.cpp" line="1114"/>
        <source>Summary</source>
        <translation>内容</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="110"/>
        <source>Undefined file</source>
        <translation>未定義ファイル</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="217"/>
        <location filename="resultstree.cpp" line="836"/>
        <source>[Inconclusive]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="368"/>
        <source>debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="635"/>
        <source>Copy filename</source>
        <translation>ファイル名をコピー</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="636"/>
        <source>Copy full path</source>
        <translation>フルパスをコピー</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="637"/>
        <source>Copy message</source>
        <translation>メッセージをコピー</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="638"/>
        <source>Hide</source>
        <translation>非表示</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="685"/>
        <location filename="resultstree.cpp" line="700"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="686"/>
        <source>No editor application configured.

Configure the editor application for Cppcheck in preferences/Applications.</source>
        <oldsource>Configure the text file viewer program in Cppcheck preferences/Applications.</oldsource>
        <translation type="unfinished">メニューの「編集」→「設定」からテキストファイルを表示するアプリケーションを設定してください。</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="701"/>
        <source>No default editor application selected.

Please select the default editor application in preferences/Applications.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="730"/>
        <source>Could not find the file!</source>
        <translation type="unfinished">ファイルが見つかりません</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="785"/>
        <source>Could not start %1

Please check the application path and parameters are correct.</source>
        <translation>%1 が実行できません。

実行ファイルパスや引数の設定を確認してください。</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="799"/>
        <source>Could not find file:
%1
Please select the directory where file is located.</source>
        <translation>ファイルが見つかりません:
%1
ディレクトリにファイルが存在するか確認してください。</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="806"/>
        <source>Select Directory</source>
        <translation>ディレクトリを選択</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="344"/>
        <source>style</source>
        <translation>スタイル</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="348"/>
        <source>error</source>
        <translation>エラー</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="352"/>
        <source>warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="356"/>
        <source>performance</source>
        <translation>パフォーマンス</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="360"/>
        <source>portability</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="364"/>
        <source>information</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ResultsView</name>
    <message>
        <location filename="resultsview.ui" line="26"/>
        <source>Results</source>
        <translation>結果</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="127"/>
        <source>No errors found, nothing to save.</source>
        <translation>警告/エラーが見つからなかったため、保存しません。</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="157"/>
        <location filename="resultsview.cpp" line="167"/>
        <source>Failed to save the report.</source>
        <translation>レポートの保存に失敗しました。</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="192"/>
        <source>%p% (%1 of %2 files checked)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="207"/>
        <location filename="resultsview.cpp" line="219"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="208"/>
        <source>No errors found.</source>
        <translation>警告/エラーは見つかりませんでした。</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="216"/>
        <source>Errors were found, but they are configured to be hidden.
To toggle what kind of errors are shown, open view menu.</source>
        <translation>警告/エラーが見つかりましたが、非表示設定になっています。</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="263"/>
        <location filename="resultsview.cpp" line="283"/>
        <location filename="resultsview.cpp" line="293"/>
        <source>Failed to read the report.</source>
        <translation>レポートの読み込みに失敗.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="333"/>
        <source>Summary</source>
        <translation>内容</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="334"/>
        <source>Message</source>
        <translation>メッセージ</translation>
    </message>
</context>
<context>
    <name>Settings</name>
    <message>
        <location filename="settings.ui" line="14"/>
        <source>Preferences</source>
        <translation>設定</translation>
    </message>
    <message>
        <location filename="settings.ui" line="24"/>
        <source>General</source>
        <translation>全般</translation>
    </message>
    <message>
        <location filename="settings.ui" line="162"/>
        <source>Include paths:</source>
        <translation>Include ディレクトリ:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="180"/>
        <location filename="settings.ui" line="232"/>
        <source>Add...</source>
        <translation>追加...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="41"/>
        <source>Number of threads: </source>
        <translation>解析スレッド数:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="85"/>
        <source>Ideal count:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="92"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="114"/>
        <source>Force checking all #ifdef configurations</source>
        <oldsource>Check all #ifdef configurations</oldsource>
        <translation type="unfinished">すべての #ifdef をチェックする</translation>
    </message>
    <message>
        <location filename="settings.ui" line="121"/>
        <source>Show full path of files</source>
        <translation>ファイルのフルパスを表示</translation>
    </message>
    <message>
        <location filename="settings.ui" line="128"/>
        <source>Show &quot;No errors found&quot; message when no errors found</source>
        <translation>エラーが無いときは&quot;エラーなし&quot;を表示</translation>
    </message>
    <message>
        <location filename="settings.ui" line="135"/>
        <source>Enable inline suppressions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="156"/>
        <source>Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="187"/>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="194"/>
        <location filename="settings.ui" line="246"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="219"/>
        <source>Applications</source>
        <translation>アプリケーション</translation>
    </message>
    <message>
        <location filename="settings.ui" line="239"/>
        <source>Edit...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="253"/>
        <source>Set as default</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="278"/>
        <source>Reports</source>
        <translation>レポート</translation>
    </message>
    <message>
        <location filename="settings.ui" line="284"/>
        <source>Save all errors when creating report</source>
        <translation>すべての警告/エラーを保存</translation>
    </message>
    <message>
        <location filename="settings.ui" line="291"/>
        <source>Save full path to files in reports</source>
        <translation>ファイルのフルパスを保存</translation>
    </message>
    <message>
        <location filename="settings.ui" line="312"/>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="326"/>
        <source>Advanced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="332"/>
        <source>&amp;Show inconclusive errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="339"/>
        <source>S&amp;how internal warnings in log</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="settingsdialog.cpp" line="84"/>
        <source>N/A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="208"/>
        <source>Add a new application</source>
        <translation>新しいアプリケーションの追加</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="245"/>
        <source>Modify an application</source>
        <translation>アプリケーションの変更</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="278"/>
        <source>[Default]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="325"/>
        <source>Select include directory</source>
        <translation>include ディレクトリを選択</translation>
    </message>
</context>
<context>
    <name>StatsDialog</name>
    <message>
        <location filename="stats.ui" line="14"/>
        <location filename="stats.ui" line="228"/>
        <location filename="statsdialog.cpp" line="110"/>
        <source>Statistics</source>
        <translation>統計情報</translation>
    </message>
    <message>
        <location filename="stats.ui" line="27"/>
        <location filename="statsdialog.cpp" line="102"/>
        <source>Project</source>
        <translation>プロジェクト</translation>
    </message>
    <message>
        <location filename="stats.ui" line="33"/>
        <source>Project:</source>
        <translation>プロジェクト:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="53"/>
        <source>Paths:</source>
        <translation>パス:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="85"/>
        <source>Include paths:</source>
        <translation>Include ディレクトリ:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="108"/>
        <source>Defines:</source>
        <translation>Defines:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="145"/>
        <location filename="statsdialog.cpp" line="106"/>
        <source>Previous Scan</source>
        <translation>前回の解析</translation>
    </message>
    <message>
        <location filename="stats.ui" line="151"/>
        <source>Path Selected:</source>
        <translation>ディレクトリ選択:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="161"/>
        <source>Number of Files Scanned:</source>
        <translation>解析済みファイル数:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="181"/>
        <source>Scan Duration:</source>
        <translation>解析にかかった時間:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="236"/>
        <source>Errors:</source>
        <translation>エラー:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="254"/>
        <source>Warnings:</source>
        <translation>警告:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="272"/>
        <source>Stylistic warnings:</source>
        <translation>スタイル警告:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="290"/>
        <source>Portability warnings:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="stats.ui" line="297"/>
        <location filename="stats.ui" line="333"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="stats.ui" line="308"/>
        <source>Performance issues:</source>
        <translation>パフォーマンス警告:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="326"/>
        <source>Information messages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="stats.ui" line="362"/>
        <source>Copy to Clipboard</source>
        <translation>クリップボードにコピー</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="81"/>
        <source>1 day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="81"/>
        <source>%1 days</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="83"/>
        <source>1 hour</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="83"/>
        <source>%1 hours</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="85"/>
        <source>1 minute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="85"/>
        <source>%1 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="87"/>
        <source>1 second</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="87"/>
        <source>%1 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="91"/>
        <source>0.%1 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="93"/>
        <source> and </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="101"/>
        <source>Project Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="103"/>
        <source>Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="104"/>
        <source>Include paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="105"/>
        <source>Defines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="107"/>
        <source>Path selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="108"/>
        <source>Number of files scanned</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="109"/>
        <source>Scan duration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="111"/>
        <source>Errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="112"/>
        <source>Warnings</source>
        <translation type="unfinished">警告</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="113"/>
        <source>Style warnings</source>
        <translation type="unfinished">スタイル警告</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="114"/>
        <source>Portability warnings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="115"/>
        <source>Performance warnings</source>
        <translation type="unfinished">パフォーマンス警告</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="116"/>
        <source>Information messages</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ThreadResult</name>
    <message>
        <location filename="threadresult.cpp" line="55"/>
        <source>%1 of %2 files checked</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TxtReport</name>
    <message>
        <location filename="txtreport.cpp" line="81"/>
        <source>inconclusive</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
