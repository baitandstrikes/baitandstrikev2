$ErrorActionPreference = 'Stop'
$themeRoot = Split-Path $PSScriptRoot -Parent
$outputDirectory = Join-Path $themeRoot 'dist'
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
$archive = Join-Path $outputDirectory 'bait-strike-editorial.zip'
$folders = @('assets', 'config', 'layout', 'locales', 'sections', 'snippets', 'templates') | ForEach-Object { Join-Path $themeRoot $_ }
Compress-Archive -LiteralPath $folders -DestinationPath $archive -Force
Write-Output $archive

