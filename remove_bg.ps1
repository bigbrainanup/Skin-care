Add-Type -AssemblyName System.Drawing
$path = 'C:\Users\Lenovo\Desktop\skincare-app\public\skincare\transparency_smears.png'
$img = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.DrawImage($img, 0, 0)
$graphics.Dispose()
$img.Dispose()
$bmp.MakeTransparent([System.Drawing.Color]::White)
$bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Done"
