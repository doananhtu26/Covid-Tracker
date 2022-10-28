import React from 'react';
import {Typography,Card,Grid, CardMedia,CardActionArea,CardContent} from "@material-ui/core";
import styles from "./infor.css";




const Information = () => {
    return(
       <div className={styles.container}>
        <Grid container spacing ={3} justify="center">
            <Grid item components={Card}>
                <CardMedia
                    component="img"
                    image="../image/Ảnh1.jpg"
                    alt=""
                />
                 <Typography color="textSecondary" variant="h5">Thực hiện biện pháp 5K</Typography>
            </Grid>
        </Grid>
        
        <Grid item components={Card}>
        <Card style={{marginBottom:30, marginTop:30}}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          with="20%"
          image="http://www.hoanmydanang.com/upload/hoanmydanang.com/Hinh%20anh/Tin%20tuc/Tin%20y%20te/R%E1%BB%ADa%20tay%20th%C6%B0%E1%BB%9Dng%20xuy%C3%AAn%20%C4%91%E1%BB%83%20b%E1%BA%A3o%20v%E1%BB%87%20s%E1%BB%A9c%20kh%E1%BB%8Fe/rua-tay-thuong-xuyen-de-bao-ve-suc-khoe.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            01 : KHỬ KHUẨN
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Thường xuyên rửa tay đúng cách bằng xà phòng dưới vời nước sạch,
            hoặc bằng dung dịch sát khuẩn có cồn  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
        <Grid item components={Card}>
        <Card style={{marginBottom:30}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/mask_considerations-01-fit-snug-medium.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            02 : KHẨU TRANG
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Đeo khẩu trang nơi công cộng, trên phương tiện giao thông công cộng và đến cơ sở y tế
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </Grid>
    
        <Grid item components={Card}>
        <Card style={{marginBottom:30}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://cdn.thuvienphapluat.vn/uploads/tintuc/%E1%BA%A2NH%20TIN%20TUC/gian-cach-xa-hoi.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            03 : KHOẢNG CÁCH
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Giữ khoảng cách tối thiểu với người khác là 2m
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </Grid>

        <Grid item components={Card}>
        <Card style={{marginBottom:30}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          with="100"
          image="https://yenthe.bacgiang.gov.vn/documents/22799/12461665/1640428829558_image+%2815%29.jpeg/901d006b-c535-4f50-82a5-87afdbccd79a?t=1640428829565"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            04 : KHÔNG TỤ TẬP   
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Không tụ tập quá 10 người nơi công cộng
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </Grid>
        <Grid item components={Card}>
        <Card style={{marginBottom:30}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://login.medlatec.vn//ckfinder/userfiles/images/khai-bao-y-te-dien-tu-medlatec.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            05 : KHAI BÁO Y TẾ
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Thực hiện khai báo y tế trên ứng dụng NcoVi
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </Grid>
        </div>
    ) 
}

export default Information;